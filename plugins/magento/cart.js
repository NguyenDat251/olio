import RestAPI from './rest'
const AXIOS = require('axios');
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
export default class CartAPI extends RestAPI {
  /*
    Create cart
  */
  // POST <host>/rest/<store_code>/V1/carts/mine

  /* 
    Get Current Cart Info 
  */

  /* 
    Remove Item From Cart 
  */

  /* ----------------------------------
    Add Item in Cart
  ------------------------------------*/
  // Reference: https://devdocs.magento.com/guides/v2.3/rest/tutorials/orders/order-add-items.html

  /*
    Add Simple Item to a cart
  */
  // POST <host>/rest/<store_code>/V1/carts/mine/items
  // Payload
  /*
  {
    "cartItem": {
      "sku": "WS12-M-Orange",
      "qty": 1,
      "quote_id": "4"
    }
  }
  */
  // Response
  /*
  {
    "item_id": 7,
    "sku": "WS12-M-Orange",
    "qty": 1,
    "name": "Radiant Tee-M-Orange",
    "product_type": "simple",
    "quote_id": "4"
  }
  */


  /*
    Add a configurable product to a cart
  */
  // POST <host>/rest/<store_code>/V1/carts/mine/items
  // Payload
  /*
  {
    "cartItem": {
      "sku": "MH01",
      "qty": 1,
      "quote_id": "4",
      "product_option": {
        "extension_attributes": {
          "configurable_item_options": [
            {
              "option_id": "93",
              "option_value": 52
            },
            {
              "option_id": "141",
              "option_value": 168
            }
          ]
        }
      },
      "extension_attributes": {}
    }
  }
  */
  // Response
  /*
  {
      "item_id": 13,
      "sku": "MH01-S-Gray",
      "qty": 1,
      "name": "Chaz Kangeroo Hoodie",
      "price": 52,
      "product_type": "configurable",
      "quote_id": "4",
      "product_option": {
          "extension_attributes": {
              "configurable_item_options": [
                  {
                      "option_id": "93",
                      "option_value": 52
                  },
                  {
                      "option_id": "141",
                      "option_value": 168
                  }
              ]
          }
      }
  }
  */
 
  async addConfigProductToCart(option) {
    
    let data = {
      "cart_item": {
        "quote_id": 796,
        "product_type": "configurable",
        "sku": null,
        "qty": 1,
        "product_option": {
          "extension_attributes": {
            "configurable_item_options": []
          }
        }
      }
    }

    data.cart_item.sku = option.sku;

    data.cart_item.product_option.extension_attributes.configurable_item_options.push({ "option_id": "227", "option_value": option.ValueColor });

    if (option.name != "Áo gối" && option.name != "Áo gối ôm") {
      data.cart_item.product_option.extension_attributes.configurable_item_options.push({ "option_id": "216", "option_value": option.ValueSize });
    }

    // this.request({
    //   method: this.HTTP_METHOD.POST,
    //   url: "/carts/mine/items",
    //   data: data
    // });

    await AXIOS({
      method: "post",
      url: "http://localhost:3000/api",
      data: data
  });
  }


  /*
    Add a bundle product to a cart
  */
  // POST <host>/rest/<store_code>/V1/carts/mine/items
  // Payload
  /*
  {
      "cartItem": {
          "sku": "24-WG080",
          "qty": "1",
          "quote_id": "4",
          "product_option": {
              "extension_attributes": {
                  "bundle_options": [
                      {
                          "option_id": 1,
                          "option_qty": 1,
                          "option_selections": [2]
                      },
                      {
                          "option_id": 2,
                          "option_qty": 1,
                          "option_selections": [4]
                      },
                      {
                          "option_id": 3,
                          "option_qty": 1,
                          "option_selections": [6]
                      },
                      {
                          "option_id": 4,
                          "option_qty": 1,
                          "option_selections": [8]
                      }
                  ]
              }
          }
      }
  }
  */
  // Response
  /*
  {
    "item_id": 9,
    "sku": "24-WG080-24-WG084-24-WG088-24-WG082-blue-24-WG086",
    "qty": 1,
    "name": "Sprite Yoga Companion Kit",
    "price": 68,
    "product_type": "bundle",
    "quote_id": "4",
    "product_option": {
      "extension_attributes": {
        "bundle_options": [
          {
            "option_id": 1,
            "option_qty": 1,
            "option_selections": [
              2
            ]
          },
          {
            "option_id": 2,
            "option_qty": 1,
            "option_selections": [
              4
            ]
          },
          {
            "option_id": 3,
            "option_qty": 1,
            "option_selections": [
              6
            ]
          },
          {
            "option_id": 4,
            "option_qty": 1,
            "option_selections": [
              8
            ]
          }
        ]
      }
    }
  }
  */
}