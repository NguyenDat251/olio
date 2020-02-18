
/*
    Create Customer
*/
// POST <host>/rest/<store_code>/V1/customers
// Authorization Bearer <admin token>
// Payload
/*
{
  "customer": {
    "email": "jdoe@example.com",
    "firstname": "Jane",
    "lastname": "Doe",
    "addresses": [{
      "defaultShipping": true,
      "defaultBilling": true,
      "firstname": "Jane",
      "lastname": "Doe",
      "region": {
        "regionCode": "NY",
        "region": "New York",
                                "regionId":43
      },
      "postcode": "10755",
      "street": ["123 Oak Ave"],
      "city": "Purchase",
      "telephone": "512-555-1111",
      "countryId": "US"
    }]
  },
  "password": "Password1"
}
*/
// Response
/*
{
  "id": 2,
  "group_id": 1,
  "default_billing": "2",
  "default_shipping": "2",
  "created_at": "2017-01-31 01:18:13",
  "updated_at": "2017-01-31 01:18:13",
  "created_in": "Default Store View",
  "email": "jdoe@example.com",
  "firstname": "Jane",
  "lastname": "Doe",
  "store_id": 1,
  "website_id": 1,
  "addresses": [
    {
      "id": 2,
      "customer_id": 2,
      "region": {
        "region_code": "NY",
        "region": "New York",
        "region_id": 43
      },
      "region_id": 43,
      "country_id": "US",
      "street": [
        "123 Oak Ave"
      ],
      "telephone": "512-555-1111",
      "postcode": "10755",
      "city": "Purchase",
      "firstname": "Jane",
      "lastname": "Doe",
      "default_shipping": true,
      "default_billing": true
    }
  ],
  "disable_auto_group_change": 0
}
*/


/*
    Get Customer Token
*/
// POST <host>/rest/<store_code>/V1/integration/customer/token
// Payload
/*
{
"username": "jdoe@example.com",
"password": "Password1"
}
*/
// Response
// q0u66k8h42yaevtchv09uyy3y9gaj2ap

