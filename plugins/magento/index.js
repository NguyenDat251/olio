import Admin from './admin'
import Order from './order'
import Product from './product'
import ConfigProduct from './product_configurable'
import Cart from './cart'
import rest from './rest'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
export default {
    Admin: new Admin(),
    Order: new Order(),
    Product: new Product(),
    ConfigProduct: new ConfigProduct(),
    Cart: new Cart(),
    rest: new rest()
}
