import { Request, Response } from 'express';
import Order from '../models/Order';

const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).send(`Error creating order ${JSON.stringify(req.body)}`);
    }
};

const getUserOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const userID = req.params.user;
        const orders = await Order.find({ userID });
        res.json(orders);
    } catch (error) {
        res.status(500).send(`Error fetching orders ${req.params.user}`);
    }
};

export { createOrder, getUserOrders };
