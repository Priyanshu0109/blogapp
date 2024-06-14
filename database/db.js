import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://kpriyanshu397:yuZV0DDAm5Selwpc@cluster0.6uwyvtr.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;