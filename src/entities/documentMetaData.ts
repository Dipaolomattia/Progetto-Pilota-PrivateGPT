
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Document } from "./documento";

@Entity()
export class DocumentMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doc_id: string;

  @Column()
  filename: string;

  @Column()
  page_label: number;

  @ManyToOne(() => Document, (document) => document.data)
  document: Document;
}