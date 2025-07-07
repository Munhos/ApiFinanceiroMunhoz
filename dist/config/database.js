"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error('MONGO_URI não definida no arquivo .env');
}
const connectDatabase = async () => {
    try {
        await mongoose_1.default.connect(uri);
        console.log('✅ Conectado ao MongoDB com sucesso!');
    }
    catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
