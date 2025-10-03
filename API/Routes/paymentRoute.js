import express from 'express'
import {Authenticated} from '../Middlewares/auth.js'
import {allOrders, checkout, userOrder, verify} from '../Controllers/payment.js'
const router = express.Router();

//checkout
router.post("/checkout",checkout)

//verify payment and save to db
router.post('/verify-payment',verify)

//user order
router.get("/userorder",Authenticated, userOrder)
//all order
router.get("/orders", allOrders)

export default router