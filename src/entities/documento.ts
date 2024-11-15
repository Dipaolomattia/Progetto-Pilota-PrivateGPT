
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DocumentMetadata } from "../entities/documentMetadata";

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  object: string;

  @Column()
  model: string;

  @OneToMany(() => DocumentMetadata, (metadata) => metadata.document, { cascade: true })
  data: DocumentMetadata[];
}