import { Column, Entity} from "typeorm";
import { v4 } from "uuid";
import { BaseEntity } from "../shared/database/base.entity";

@Entity({ name: "user" })
export class User extends BaseEntity<User> {

  @Column({ nullable: true })
  nick!: string | undefined;

  @Column({ unique: true, type: "text" })
  email!: string;

  @Column({ type: "text" })
  password!: string;
}
