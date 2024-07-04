import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import photoRoutes from './routes/unsplashRoutes';
import orderRoutes from './routes/orderRoutes';

dotenv.config();

const app = express();
app.use(express.json());


(async function mongooseConnect(mongoURI: string): Promise<void> {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected')
    } catch(e) {
        console.log('MongoDB failed to connect', e)
    }

})(process.env.MONGO_URI as string);



app.use('/photos', photoRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port ${5000}`));

