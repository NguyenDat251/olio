const redirects = require('../static/redirects.json') // update to your file path
//import MAGENTO_API from '~/plugins/magento'

export default function(req, rest, next) {
    console.log("req.path: " + req);
  // find the redirect if it exists where the from === the requested url
  const redirect = redirects.find(r => r.from === req.url)

  if (redirect) {
  console.log("req.data: " + req.data);
  next()
//   MAGENTO_API.rest.request({
//          method: "post",
//          url: "/carts/mine/items",
//          data: req.data
//        });
     }else{
         next()
     }
  
}
