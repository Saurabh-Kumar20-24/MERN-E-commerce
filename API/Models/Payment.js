import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    orderDate: {type: Date, default: Date.now},
    payStatus: {type: String}
},{strict: false})   //here model allows to take only mentioned data, to get more data use strict false

export const Payment = mongoose.model("Payment", paymentSchema)