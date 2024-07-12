import './messages_page.html';
import '../components/messages';
import '../components/new_message';
import { NewMessage } from '../components/new_message.jsx';
import { Messages } from '../../api/messages/messages';
import {saveMessage} from "../../api/messages/methods";

Template.messagesPage.onCreated(function(){
	this.subscribe("messages");
});
Template.messagesPage.helpers({
	messagesCursor: function(){
		return Messages.find();
	},
	sendHandler: function(){
		return (content)=>{
			saveMessage.call({
				content: content,
				date: new Date()
		}, (err, res)=>{
				if(err) console.log(err);
				else console.log(`Documento creado con id: ${res}`);
		});
		}
	},
	NewMessage: function(){
		return NewMessage;
	}
});