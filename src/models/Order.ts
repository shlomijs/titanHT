import { Schema, model } from 'mongoose';

interface IOrder {
    email: string;
    fullName: string;
    fullAddress: string;
    imagesUrls: string[];
    frameColor: string;
    userID: string;
}

const orderSchema = new Schema<IOrder>({
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    fullAddress: { type: String, required: true },
    imagesUrls: { type: [String], required: true },
    frameColor: { type: String, required: true },
    userID: { type: String, required: true }
});

const Order = model<IOrder>('Order', orderSchema);

export default Order;
