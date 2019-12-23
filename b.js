const AXIOS = require('axios');


let headers = {};
headers['content-type'] = 'application/json';
headers['Authorization'] = 'Bearer ' + '6902cf4h0hr6lrqdaco1km55eewlycqt';
let url = "/configurable-products/" + "LA-14038" + "/options/all";
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

async function addConfigProductToCart(option) {
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

    let response = await AXIOS({
        method: "post",
        url: "https://ecom.liena.com.vn/rest/V1/carts/mine/items",
        data: data,
        headers: headers
    });
}
let ItemIterator = ["drap",
    "pillow",
    "bolster",
    "blanket",
    "blanket-duo"]

let ItemIsSelected = {
    "drap": {
        name: "Ga bọc",
        sku: "LA-14038",
        label: null,
        color: null,
        size: null,
        ValueColor: 382,
        ValueSize: 366
    },
    "pillow": {
        name: "Áo gối",
        sku: "LA-14039",
        label: null,
        color: null,
        size: null,
        ValueColor: null,
        ValueSize: null
    },
    "bolster": {
        name: "Áo gối ôm",
        sku: "LA-14040",
        label: null,
        color: null,
        size: null,
        ValueColor: null,
        ValueSize: null
    },
    "blanket": {
        name: "Mền 1 màu",
        sku: "LA-14041",
        label: null,
        color: null,
        size: null,
        ValueColor: null,
        ValueSize: null
    },
    "blanket-duo": {
        name: "Mền 2 màu",
        sku: "LA-14042",
        label: null,
        color: null,
        size: null,
        ValueColor: null,
        ValueSize: null
    },
}

ItemIterator.forEach(async (item) => {
    if (ItemIsSelected[item].ValueColor) {
        await addConfigProductToCart(ItemIsSelected[item]);
    }
})
