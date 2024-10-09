//import mongoose
import mongoose from 'mongoose';
//connect to mongodb
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetworkDB');
        console.log('Database connected');
        return mongoose.connection;
    }
    catch (error) {
        console.error('Database connection failed');
        throw new Error('Database connection failed');
    }
};
//export connection
export default db;
