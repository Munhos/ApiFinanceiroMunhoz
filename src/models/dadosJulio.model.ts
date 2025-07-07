import mongoose, { Schema, Document } from 'mongoose';

// Tipagem TypeScript restrita
export interface IDadosJulio extends Document {
    data: Date;
    valor: number;
    descricao: string;
    tipoTransacao: 'entrada' | 'saida';
}

// Schema do Mongoose
const DadosJulioSchema: Schema = new Schema(
    {
        data: {
            type: Date,
            required: true
        },
        valor: {
            type: Number,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        tipoTransacao: {
            type: String,
            enum: ['entrada', 'saida'],
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Exporta o model
export const DadosJulio = mongoose.model<IDadosJulio>('DadosJulio', DadosJulioSchema);
