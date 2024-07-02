import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import {Messages} from "../imports/api/messages/messages";
import $ from 'jquery';
import './main.html';
import '../imports/ui/components/messages';
import '../imports/ui/components/message_item';
import '../imports/ui/components/new_message';

console.log("hola");
console.log(Messages.find({}).count());
console.log(Messages.findOne());

const handle = Meteor.subscribe("messages", {
    onReady:function(){
        console.log("ready");
        console.log(Messages.find({}).count());
    }
});
//Para cambios reactivos.
Tracker.autorun(function(){
    const isReady = handle.ready();
    console.log(`la suscripción está ${isReady ? 'lista' : 'no lista'}`);
});

//Variable reactiva de tipo primitivo (reactive-var package)
var nombre = new ReactiveVar("Antonio");
nombre.set("Pepe");  //Si cambio esta variable, todas las que dependan de ella se modificarán, como un observer.
console.log(nombre.get());
//diccionario reactivo.
var dict = new ReactiveDict("myDict");
dict.set("weather", "cloudy");
Tracker.autorun(()=>{
    console.log("now "+dict.get("weather"));
});
dict.set("weather", "sunny");


Meteor.startup(() => {
    console.log("Cliente iniciado");
  });
