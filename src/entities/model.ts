import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Model{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // Associazione con gli n Id di PrivateGPT
    @Column("json", { nullable: true })
     documentsId: string[]; // O number[], a seconda del tipo di ID

     @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
     creation_data: Date;

     @Column("text")
    description: string;


    
}
