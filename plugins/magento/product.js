import RestAPI from './rest'

export default class ProductAPI extends RestAPI {

    /*
        One Product
    */
    /// Get One Product
    /// GET    /V1/products/:sku
    getOneProduct(sku) {
        let $this = this;
        this.request({
            method: $this.HTTP_METHOD.GET,
            url: "/products/" + sku
        }, function (error, data) {
            if (error) {
                return cb(error);
            }
            return data;
        });
    }
}

/// Get Product Reviews

/// Get Product Questions

/// Get Product One Media (Image, Video)

