import RestAPI from './rest'

export default class ProductsConfigAPI extends RestAPI{

/// call to determine the option_id values for the given SKU.
// GET /V1/configurable-products/:sku/options/all
async getSizeItem(sku){
    let url = "/configurable-products/" + sku + "/options/all";
    let response = {};

    response = await this.request({
        method: this.HTTP_METHOD.GET,
        url: url
    });
    console.log("response: " + JSON.stringify(response));

    let ValueIdSize = {};
    let result = [];

    if(response){
        response.data.forEach(element => {
            //216 is attribute_id size
            if(element.attribute_id == "216"){
                ValueIdSize = element.values;
            }
        });
    }

    url = "/products/attributes?searchCriteria[filterGroups][0][filters][0][field]=attribute_id&searchCriteria[filterGroups][0][filters][0][value]=216"
    let ValueAllSize = await this.request({
        method: this.HTTP_METHOD.GET,
        url: url
    });
    ValueAllSize = ValueAllSize.data.items[0].options;

    ValueAllSize.forEach(async (element) => {
        await ValueIdSize.forEach(item =>{
            if(element.value == item.value_index){
                result.push({label: element.label, value: element.value});
            }
        })
    })

    return result;
}

// call returns information about each combination of color and size
// GET /V1/configurable-products/:sku/children

}