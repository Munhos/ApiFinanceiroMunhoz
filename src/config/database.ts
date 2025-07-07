import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('MONGO_URI não definida no arquivo .env');
}

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log('✅ Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};
