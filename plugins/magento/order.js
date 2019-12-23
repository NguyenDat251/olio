
import RestAPI from './rest'

export default class OrderAPI extends RestAPI {

  // REFERENCE
  // https://devdocs.magento.com/guides/v2.3/rest/list.html#sales
  // https://devdocs.magento.com/redoc/2.3/admin-rest-api.html
  // https://devdocs.magento.com/redoc/2.3/customer-rest-api.html
  
  /*
    Order
  */
  /* 
    Get One Order Info
  */
  // GET    /V1/orders/:id
  // Payload: None
  // Example Response
  /*
    
  */
  
  /*
    Get Multiple Orders with searchCriteria
  */
  // GET    /V1/orders

  //
  // GET    /V1/orders/:id/statuses

  // Cancel an Order
  // POST   /V1/orders/:id/cancel

  // 
  // POST   /V1/orders/:id/emails

  // Hold an Order
  // POST   /V1/orders/:id/hold

  // UnHold an Order
  // POST   /V1/orders/:id/unhold

  /*
    Comments
  */
  // Update Order Status
  // POST   /V1/orders/:id/comments
  // Payload
  /*  
  {
    "statusHistory": {
      "comment": "string",
      "createdAt": "string",
      "entityId": 0,
      "entityName": "string",
      "isCustomerNotified": 0,
      "isVisibleOnFront": 0,
      "parentId": 0,
      "status": "string",
      "extensionAttributes": {}
    }
  }
  */
  // Response: true
  updateOrderComment(order_id, cb) {
    this.request({
      method: this.HTTP_METHOD.GET,
      url: "/orders/" + order_id + "/comments"
    }, cb);
  }

  /* 
    Get an order's comments
  */
  // GET    /V1/orders/:id/comments


  /* 
    Create one order
  */
  // PUT    /V1/orders/create

  // 
  // PUT    /V1/orders/:parent_id

  /*
    Items
  */
  /* 
    Get Items in one Order
  */
  // GET    /V1/orders/items/:id

  // 
  // GET    /V1/orders/items


  // 
  // POST   /V1/orders/

}