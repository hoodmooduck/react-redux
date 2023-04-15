import { configureStore, applyMiddleware} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import orderReducer from './orderReducer/orderReducer'
import basketReducer from './basketReducer/basketReducer'
import customerReducer from './customerReducer/customerReducer'
import productsReducer from './productsReducer/productsReducer'
import productInfReducer from './productInf/productInfReducer'
import productInfStateReducer from './productInfState/productInfStateReducer'
import commsentsReducer from './commsentsReducer/commsentsReducer'

export default configureStore({
    reducer: {
        customer: customerReducer, 
        products: productsReducer,
        basket: basketReducer,
        order: orderReducer,
        productInf: productInfReducer,
        productInfState: productInfStateReducer,
        comments: commsentsReducer,
    },
},composeWithDevTools(applyMiddleware(thunk)))