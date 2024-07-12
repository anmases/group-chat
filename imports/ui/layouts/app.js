import {Meteor} from 'meteor/meteor';
import './app.html';

Template.app_body.onCreated(function(){
	this.autorun(function(){
		if(!Meteor.userId()){
			FlowRouter.go("/login");
		}
	});
});