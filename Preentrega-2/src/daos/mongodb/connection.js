import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://Bocha:Buchcheister4522@cluster0.vz76pws.mongodb.net/'

try {
    await mongoose.connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB');
} catch (error) {
    console.log(error);
}