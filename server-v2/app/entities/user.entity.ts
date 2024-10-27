import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";

@Entity()
export class User {
  @PrimaryColumn({ type: "uuid" })
  id: string = v4();

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  constructor({ email, password }: { email: string; password: string }) {
    this.email = email;
    this.password = password;
  }
}
