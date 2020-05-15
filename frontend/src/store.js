import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import Cookie from "js-cookie";
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON('cartItems') || [];

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;