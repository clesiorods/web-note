import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('RefreshToken') 
export class RefreshToken {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    expiresIn: number;

    @Column() 
    id_user: number;

    // @OneToOne(() => User, u => u.refreshToken)
    // @JoinColumn({ name: 'id_user', referencedColumnName: 'id' })
    // user: User
}
