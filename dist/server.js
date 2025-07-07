"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    await (0, database_1.connectDatabase)();
    app_1.default.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
};
startServer();
