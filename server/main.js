import {Meteor} from "meteor/meteor";
import {Messages} from "../imports/api/messages/messages";
import pubs from "../imports/api/messages/server/publications";
import { saveMessage } from "../imports/api/messages/methods";

pubs();

/*
console.log(Messages.find({}).count());
Messages.insert({content:"Hola mundo"});
console.log(Messages.findOne());
*/
