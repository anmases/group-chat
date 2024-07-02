import { Template } from 'meteor/templating';
import "./message_item.html";
import moment from "moment";
import SimpleSchema from 'simpl-schema';
require('moment/locale/es');

Template.messageItem.onCreated(function(){
    //los templates tienen su propio autorun dentro del contexto.
    this.autorun(function(){
        new SimpleSchema({
            createdAt:{type:Date},
            content:{type:String},
        }).validate(Template.currentData())
    });
});

Template.messageItem.helpers({
    content: function(){
        return this.content;
    },
    formatedDate: function(){
        console.log(this);
        return moment(this.createdAt).fromNow();
    }
});