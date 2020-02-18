
import RestAPI from './rest'

export default class AdminAPI extends RestAPI {

    // Get Admin Token
    // POST https://liena.izysync.com/rest/V1/integration/admin/token
    // POST <host>/rest/<store_code>/V1/integration/admin/token
    // Payload
    /*
    {
      "username": "admin",
      "password": "123123q"
    }
    */
    // Response: 5r8cvmpr11j6gmau8990rcj2qk7unh8i
    
    getToken(cb) {
        let $this = this;
        this.request({
            method: this.HTTP_METHOD.POST,
            url: "/integration/admin/token",
            data: {
                username: this.admin_username,
                password: this.admin_password
            }
        }, function(error, data){
            if(error){
                return cb(error);
            }
            
            $this.admin_token = data;
            console.log("new token: " + $this.admin_token);
            return cb(null, data);
        });
    }
}