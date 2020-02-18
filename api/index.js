var express = require("express");
var app = express();
//import MAGENTO_API from '~/plugins/magento'

// export default function(req){
//   console.log("req.data: " + req.data);
//     // MAGENTO_API.rest.request({
//     //        method: "post",
//     //        url: "/carts/mine/items",
//     //        data: req.data
//     //      });
// }

module.exports = function(req, res, next){
  console.log(req);
  next();
}