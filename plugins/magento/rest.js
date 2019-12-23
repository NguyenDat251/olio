import { async } from 'q';


const AXIOS = require('axios');

const MESSAGE = {
    SYSTEM_ERROR: "System Error"
}

//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

export default class RestAPI {

    constructor() {
        this.API_HOST = process.env.MAGENTO_API_HOST;
        this.API_ENDPOINT = "rest/V1";
        this.API_URL = this.API_HOST + "/" + this.API_ENDPOINT;
        //this.API_URL = this.API_HOST;

        this.HTTP_METHOD = {
            GET: 'get',
            POST: 'post',
            PUT: 'put',
            DELETE: 'delete'
        }

        this.admin_username = "trung.lt";
        this.admin_password = "Achan1$.";

        this.admin_token = "6902cf4h0hr6lrqdaco1km55eewlycqt";
        this.customer_token = null;
        this.token = process.env.MAGENTO_API_KEY;
    };

    async request(options) {
        if (!options['method']) {
            console.log("Error");
            console.log("Request: No Method");
            return;
        }

        if (!options['url']) {
            console.log("Error");
            console.log("Request: No URL");
            return;
        }

        if (!options['data']) {
            options['data'] = {};
        }

        let headers = {
            'content-type': 'application/json'
        }

        // if(this.admin_token){
        //     headers['Authorization'] = 'Bearer ' + this.admin_token;
        // }

        console.log("headers");

        headers['Authorization'] = 'Bearer ' + this.token;
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';
        console.log(headers);
        // console.log("this.API_URL: " + this.API_URL);
        // console.log( options['url']);
        // let tempURL = this.API_URL + options['url'];

        // console.log("URL:");
        // console.log(tempURL);
        console.log("url: " + this.API_URL + options['url']);
        try {
            let response = await AXIOS({
                method: options['method'],
                url: this.API_URL + options['url'],
                data: options['data'],
                headers: headers
            });

            // Status
            if (response.status != 200) {
                return { error: MESSAGE.SYSTEM_ERROR };
            }

            // Only return data
            return { error: null, data: response.data };

        } catch (error) {
            console.log("AXIOS Error:");
            //console.log(error.response.data);

            return { error: MESSAGE.SYSTEM_ERROR };
        }

        // AXIOS({
        //     method: options['method'],
        //     url: this.API_URL + options['url'],
        //     data: options['data'],
        //     headers: headers
        // }).then(function (response) {
        //     // Status
        //     if(response.status != 200){
        //         return cb(MESSAGE.SYSTEM_ERROR);
        //     }

        //     // Only return data
        //     cb(null, response.data);
        // }).catch(function (error) {
        //     console.log("Error Message:");
        //     console.log(error.response.data.message);
        //     console.log("Errors:");
        //     console.log(error.response.data.errors);
        //     //console.log("Trace:");
        //     //console.log(error.response.data.trace);

        //     return cb(MESSAGE.SYSTEM_ERROR);
        // });
    }

}