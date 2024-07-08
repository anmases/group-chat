import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import {Messages} from "../imports/api/messages/messages";
import $ from 'jquery';

import '../imports/startup/client/routes';

console.log("hola");
console.log(Messages.find({}).count());
console.log(Messages.findOne());


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
