import { database } from "../database";
import { Note } from "../entities/Note";


interface INote {
    title: string;
    content: string;
}


export class NoteService {


    async findAll() {
        const noteRepository = database.getRepository(Note);
        const notes = noteRepository
            .createQueryBuilder("note")
            .getMany()
        return notes;
    }


    async findOne(id: number) {
        const noteRepository = database.getRepository(Note);
        const note = noteRepository
            .createQueryBuilder("note")
            .where("note.id = :id", { id: id })
            .getOne()
        return note;
    }


    async create(title: string, content: string) {
        const noteRepository = database.getRepository(Note);
        const newNote = noteRepository
            .createQueryBuilder("note")
            .insert()
            .into(Note)
            .values([
                { title: title, content: content, created_by: 1 }
            ])
            .execute()
        return newNote;
    }


    async update(id: number, dados: INote) {
        const noteRepository = database.getRepository(Note);
        const note = await noteRepository
            .createQueryBuilder("note")
            .where("note.id = :id", { id: id })
            .getOne()
        const newNote = await noteRepository
            .createQueryBuilder("note")
            .update(Note)
            .set({
                title: dados.title ? dados.title : note?.title,
                content: dados.content ? dados.content : note?.content
            })
            .where("id = :id", {id: id})
            .execute()
        return newNote;
    }


    async delete(id: number) {
        const noteRepository = database.getRepository(Note);
        const newNote = await noteRepository
            .createQueryBuilder("note")
            .update(Note)
            .set({
                deleted_at: new Date()
            })
            .where("id = :id", {id: id})
            .execute()
        return newNote;
    }
}