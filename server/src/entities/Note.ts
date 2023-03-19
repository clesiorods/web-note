import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Note') 
export class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column() 
    content: string;

    @CreateDateColumn()
    created_at: Date;
    
    @Column({nullable:true})
    created_by: number;

    @UpdateDateColumn()
    updated_at: Date;
    
    @Column({nullable:true})
    updated_by: number;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column({nullable:true}) 
    deleted_by: number;
}