import { Request, Response } from "express";
import { NoteService } from "../services/NoteService";


export class NoteController {


    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const noteService = new NoteService();
            const result = await noteService.findAll();
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    async create(req: Request, res: Response): Promise<Response> {
        try {
            const {title, content} = req.body;
            if (!title || !content) {
                throw new Error('Não foi possível criar a anotação. Dados incompletos');
            }
            const noteService = new NoteService();
            const result = await noteService.create(title, content);
            return res.status(201).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    async findOne(req:Request, res:Response): Promise<Response> {
        try {
            const noteService = new NoteService();
            const {id} = req.params;
            if(!id) {
                throw new Error('Não foi possível realizar a busca. Dados incompletos');
            }
            const user = await noteService.findOne(Number(id));
            return res.status(200).json(user);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    async update(req: Request, res: Response): Promise<Response> {
        try {
            let {title, content} = req.body;
            const {id} = req.params;
            if (!id || (!title && !content)) {
                throw new Error('Não foi possível editar a anotação. Dados incompletos');
            }

            const noteService = new NoteService();
            const result = await noteService.update(Number(id), {title, content});
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            if (!id) {
                throw new Error('Não foi possível deletar a nota. Dados incompletos');
            }
            const noteService = new NoteService();
            const result = await noteService.delete(Number(id));
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }

}

