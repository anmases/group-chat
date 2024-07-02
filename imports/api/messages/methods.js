import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import {Messages} from './messages';

Meteor.methods({
    "messages.add"({content, date}){
        new SimpleSchema({
            content: {type:String},
            date:{type:Date}
        }).validate({content, date});
        Messages.insert({content:content, createdAt:date});
        return "todo OK";
    },

});

//De esta forma se pueden importar y exportar métodos sin que estén registrados de forma global en el contexto de meteor.
export const saveMessage = new ValidatedMethod({
    name: "messages-add",
    validate: new SimpleSchema({
        content: {type:String},
        date: {type:Date}
    }).validator(),
    run({content, date}){
        //cuerpo del método
        return Messages.insert({content:content, createdAt:date});
    }

});

/*
//Llamada al método (1. nombre, 2.parámetros, 3.callback con la respuesta):
Meteor.call("messages.add", {content: "aaaaa", date: new Date()}, (err, res)=>{
    if(err) console.log(err);
    else console.log(res);
});

// Llamada al método de ValidateMethod:
saveMessage.call({content: "aaaa",date: new Date()}, (err, res)=>{
    if(err) console.log(err);
    else console.log(res);
} );

*/