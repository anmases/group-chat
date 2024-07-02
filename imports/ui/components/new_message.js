import { Template } from 'meteor/templating';
import "./new_message.html";
import {saveMessage} from "../../api/messages/methods";

Template.newMessage.events({
    'click #send': function(event, template){
        saveMessage.call({
            content: template.find("#content").value,
            date: new Date()
        }, (err, res)=>{
            if(err) console.log(err);
            else console.log(`Documento creado con id: ${res}`);
        });
    }   
});