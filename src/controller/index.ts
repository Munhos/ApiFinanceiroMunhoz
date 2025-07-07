import { Request, Response } from 'express';
import { DadosJulio } from '../models/dadosJulio.model';

export const salvarDados = {
    // Criar novo dado
    post: async (req: Request, res: Response): Promise<void> => {
        try {
            const { data, valor, descricao, tipoTransacao } = req.body;

            const novoDado = new DadosJulio({ data, valor, descricao, tipoTransacao });
            const salvo = await novoDado.save();

            res.status(201).json(salvo);
        } catch (error) {
            console.error('Erro ao salvar:', error);
            res.status(500).json({ erro: 'Erro interno ao salvar o dado.' });
        }
    },

    // Buscar todos os dados
    getAll: async (_req: Request, res: Response): Promise<void> => {
        try {
            const dados = await DadosJulio.find();
            res.json(dados);
        } catch (error) {
            console.error('Erro ao buscar:', error);
            res.status(500).json({ erro: 'Erro interno ao buscar os dados.' });
        }
    },

    // Buscar dado por ID
    getOne: async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const dado = await DadosJulio.findById(id);

            if (!dado) {
                res.status(404).json({ erro: 'Dado não encontrado.' });
                return;
            }

            res.json(dado);
        } catch (error) {
            console.error('Erro ao buscar dado:', error);
            res.status(500).json({ erro: 'Erro interno ao buscar o dado.' });
        }
    },

    // Atualizar dado por ID
    update: async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const { data, valor, descricao, tipoTransacao } = req.body;

            const atualizado = await DadosJulio.findByIdAndUpdate(
                id,
                { data, valor, descricao, tipoTransacao },
                { new: true } // Retorna o documento atualizado
            );

            if (!atualizado) {
                res.status(404).json({ erro: 'Dado não encontrado para atualização.' });
                return;
            }

            res.json(atualizado);
        } catch (error) {
            console.error('Erro ao atualizar dado:', error);
            res.status(500).json({ erro: 'Erro interno ao atualizar o dado.' });
        }
    },

    // Deletar um dado por ID
    delete: async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;

            const dado = await DadosJulio.findById(id);
            if (!dado) {
                res.status(404).json({ erro: 'Dado não localizado.' });
                return;
            }

            await DadosJulio.deleteOne({ _id: id });
            res.json({ message: 'Dado excluído com sucesso.' });
        } catch (error) {
            console.error('Erro ao excluir:', error);
            res.status(500).json({ erro: 'Erro interno ao excluir o dado.' });
        }
    }
};
