import { Payment } from "../Models/Payment.js";
import Razorpay from "razorpay";
import dotenv from 'dotenv'

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

export const checkout = async (req, res) => {
  const { amount, cartItems, userShipping, userId } = req.body;
  var options = {
    amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };
  const order = await razorpay.orders.create(options);

  res.json({
    orderId: order.id,
    amount: amount,
    cartItems,
    userShipping,
    userId,
    payStatus: "created",
  });
};

//verify and save to db
export const verify = async (req, res) => {
  const {
    orderId,
    paymentId,
    signature,
    amount,
    orderItems,
    userId,
    userShipping,
  } = req.body;

  let orderConfirm = await Payment.create({
     orderId,
    paymentId,
    signature,
    amount,
    orderItems,
    userId,
    userShipping,
    payStatus: "Paid"
  });

  res.json({message: "Payment successful", success: true, orderConfirm})
};

//user specific order
export const userOrder = async (req, res)=>{
  let userId = req.user._id.toString()
  let orders = await Payment.find({userId: userId}).sort({orderDate: -1})
  res.json(orders)
}
//user specific order
export const allOrders = async (req, res)=>{
  let orders = await Payment.find({userId: userId}).sort({orderDate: -1})
  res.json(orders)
}
