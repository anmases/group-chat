import {Meteor} from 'meteor/meteor';
import './app_public.html';

Template.app_body_public.onCreated(function(){
	this.autorun(()=>{
		if(Meteor.userId()){
			FlowRouter.go("/");
		}
	});
});