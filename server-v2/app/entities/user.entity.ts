import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";

interface UserProps {
  id: string;
  email: string;
  password: string;
}

@Entity()
export class User {
  public static create(data: Partial<UserProps>): User {
    const entity = new User();
    Object.assign(entity, data);
    if (!entity.id) entity.id = v4();
    return entity;
  }

  @PrimaryColumn({ type: "uuid" })
  id!: string;

  @Column({ unique: true, type: "text" })
  email!: string;

  @Column({ type: "text" })
  password!: string;
}
