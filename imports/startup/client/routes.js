import '../../ui/layouts/app.html';
import '../../ui/layouts/app_public.html';
import '../../ui/layouts/app';
import '../../ui/layouts/app_public';
import '../../ui/pages/login_page';
import '../../ui/pages/register_page';
import '../../ui/pages/messages_page';


BlazeLayout.setRoot("body");
FlowRouter.route("/",{
	name:"home",
	action(params, queryParams){
		console.log("home");
		BlazeLayout.render("app_body", {main:"messagesPage"});
	}
});
FlowRouter.route("/login",{
	name:"login",
	action(params, queryParams){
		console.log("login");
		BlazeLayout.render("app_body_public", {main:"loginPage"});
	}
});
FlowRouter.route("/register",{
	name:"register",
	action(params, queryParams){
		console.log("register");
		BlazeLayout.render("app_body_public", {main:"registerPage"});
	}
});

FlowRouter.notFound = {
	name:"notFound",
	action:(params, queryParams)=>{
		console.log("login");
		BlazeLayout.render("app_body_public", {main:"loginPage"});
	}
};

//configuración de los templates de useraccounts:semantic-ui
AccountsTemplates.configureRoute("signIn", {
	name:"login",
	path:"/login"
});
AccountsTemplates.configureRoute("signUp", {
	name:"register",
	path:"/register"
});


//obtiene el nombre de la ruta actual
FlowRouter.getRouteName();
//accede a los parámetros de query de esa ruta
FlowRouter.getQueryParam("nombre");
//Recoger los parámetros de la ruta
FlowRouter.getParam("nombre");