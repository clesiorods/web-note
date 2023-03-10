import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('User')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

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