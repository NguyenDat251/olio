var express = require("express");
var app = express();
import MAGENTO_API from '@/plugins/magento'

export default function(req){
    MAGENTO_API.rest.request({
           method: "post",
           url: "/carts/mine/items",
           data: req.data
         })
})