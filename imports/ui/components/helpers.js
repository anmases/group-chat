/**
 * @file Aquí se definen los helpers globales.
 */

import moment from "moment";
import { Template } from 'meteor/templating';
require("moment/locale/es");

Template.registerHelper("timeAgo", (date)=>{
    return moment(date).fromNow();
});