import {Meteor} from "meteor/meteor";    //Es una buena práctica importar también las de Meteor aunque no haga falta.
import {Messages} from "../messages";

export default function(){
    Meteor.publish("messages", function(){
       /* if(!this.userId){    //Es una variable global que indica si se ha hecho login.
            return this.ready();
        }
        return Messages.find({author:this.userId});   //find devuelve un puntero o referencia a la colección.
        */
     /*  const user = Meteor.users.findOne(this.userId);    //Meteor tiene un array de usuarios. Lo extraemos.
       if(user && user.isAdmin){
            return PrivateData.find({});
       }else{
        return this.ready();
       }   */
        return Messages.find({});
    });

  /*  Meteor.publishComposite("privateData", function(){
        //para obtener el usuario de forma reactiva.
        const userId = this.userId;
        return {
            find(){
                return Meteor.users.find({_id:userId, admin:true});
            },
            children: [
                {
                    find(){
                        return PrivateData.find({});
                    }
                }
            ]
        }
    });  */
}
