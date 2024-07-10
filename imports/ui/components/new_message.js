import { Template } from 'meteor/templating';
import "./new_message.html";


Template.newMessage.events({
    'click #send': function(event, template){
        template.data.sendHandler(template.find("#content").value);
    }   
});

// FlowRouter.go("messages",{id:"messageId"}); Ejemplo de navegación.