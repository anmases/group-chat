import { Template } from 'meteor/templating';
import "./messages.html";
import "./message_item";
import { Messages } from "../../api/messages/messages";

//ciclo de vida del componente (validación):
Template.messages.onCreated(function(){
    console.log("created");
});
Template.messages.onRendered(function(){
    console.log("Showed");
});
Template.messages.onDestroyed(function(){
    console.log("Destroyed");
});

/**
 * Helpers
 * (se deven usar functions y no lamdas para tener acceso al contexto o this)
 */
Template.messages.helpers({
    messages: function(){
        return Messages.find()
    }
});