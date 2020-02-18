const AXIOS = require('axios');


let headers = {};
headers['content-type'] = 'application/json';
headers['Authorization'] = 'Bearer ' + '6902cf4h0hr6lrqdaco1km55eewlycqt';
let url = "/configurable-products/" + "LA-14038" + "/options/all";
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
async function getSth() {
    let response = {};
    try {
        response = await AXIOS({
            method: "post",
            url: "https://ecom.liena.com.vn/rest/V1/carts/mine/items",
            data: {
                "cart_item": {
                "quote_id": 796,
                "product_type" : "configurable",
                "sku": "LA-14038",
                "qty": 1,
                "product_option": {
                    "extension_attributes": {
                      "configurable_item_options" : [
                          {
                             "option_id": "216", 
                             "option_value": 366
                          },
                           {
                             "option_id": "227", 
                             "option_value": 382
                          }
                    ]
                    }
                  }
                 }
                },
            headers: headers
        });

        console.log("response: " + response.data);

        // let size = {};
        // //console.log('response inside: ' + JSON.stringify(response.data));

        // response.data.forEach(element => {
        //     if (element.attribute_id === "216") {
        //         size = element.values;
        //         //console.log("size: " + JSON.stringify(size));
        //     }
        // });

        // let url = "https://ecom.liena.com.vn/rest/V1/products/attributes?searchCriteria[filterGroups][0][filters][0][field]=attribute_id&searchCriteria[filterGroups][0][filters][0][value]=216"
        // let ValueAllSize = await AXIOS({
        //     method: "get",
        //     url: url,
        //     data: {},
        //     headers: headers
        // });
        // ValueAllSize = ValueAllSize.data.items[0].options
        // //console.log("ValueAllSize: " + JSON.stringify(ValueAllSize));
        // let result = [];
        // ValueAllSize.forEach(async (element) => {
        //     await size.forEach(item =>{
        //         if(element.value == item.value_index){
        //             // console.log("abc");
        //             // console.log("element: " + element.label);
        //             // console.log("item: " + item.value_index);
        //             result.push({label: element.label, value: element.value});
        //         }

        //         // console.log("element: " + element.value);
        //         // console.log("item: " + item.value_index);
        //     })
        //})

        //console.log(result);
    } catch (error) {
        console.log("AXIOS Error:");
        console.log(error);

    }
}

//console.log("Get ValueIdSize");
getSth();

// console.log("options inside: " + JSON.stringify(options));
// if (!options['method']) {
//     console.log("Error");
//     console.log("Request: No Method");
//     return;
// }

// if (!options['url']) {
//     console.log("Error");
//     console.log("Request: No URL");
//     return;
// }

// console.log("data inside: " + options['data']);
// if (!options['data']) {
//     options['data'] = {};
// }
// console.log("data inside after: " + JSON.stringify(options['data']));

// let headers = {};
// headers['content-type'] = 'application/json';

// if (this.access_token) {
//     headers['Authorization'] = 'Bearer ' + '6902cf4h0hr6lrqdaco1km55eewlycqt';
// }
// try {
//     console.log("begin:");
//     console.log("url: " + "https://ecom.liena.com.vn/rest/V1"+ options['url']);
//     let response = await AXIOS({
//         method: options['method'],
//         url: "https://ecom.liena.com.vn/rest/V1" + options['url'],
//         data: options['data'],
//         headers: headers
//     });
//     console.log("response inside: " + response);

//     // Status
//     if (response.status != 200) {
//         return { error: MESSAGE.SYSTEM_ERROR };
//     }

//     // Only return data
//     return { error: null, data: response.data };

// } catch (error) {
//     console.log("AXIOS Error:");
//     console.log(error.response.data);

//     return { error: MESSAGE.SYSTEM_ERROR };
// }



// console.log("response: " + JSON.stringify(response));
// let ValueIdSize = null;
// let result = [];

// console.log("Get ValueIdSize real");
// if (response.data !== null) {
//     response.data.forEach(element => {
//         //216 is attribute_id size
//         if (element.attribute_id === "216") {
//             ValueIdSize = element.values;
//         }
//     });
// }

// console.log("ValueIdSize: " + JSON.stringify(ValueIdSize))

// function check_number(number)
// {
//     if (number % 2 == 0){
//         console.log(number + ' là số chẵn');
//     }
//     else {
//         console.log(number + 'Số lẻ');
//     }
// }

// // Sử dụng hàm kiểm tra cho 5 số
// check_number(1);
// check_number(2);
// check_number(3);
// check_number(4);
// check_number(5);