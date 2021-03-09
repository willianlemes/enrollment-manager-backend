import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  ra: string;

  @Column()
  cpf: string;

  @CreateDateColumn({ name: "created_at", select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", select: false })
  updatedAt: Date;
}

export default Student;
