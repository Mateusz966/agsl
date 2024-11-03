import { Column, Entity} from "typeorm";
import { v4 } from "uuid";
import { BaseEntity } from "../shared/database/base.entity";

@Entity({ name: "user" })
export class User extends BaseEntity<User> {

  @Column({ nullable: true, type: "text" })
  nick!: string | undefined;

  @Column({ unique: true, type: "text" })
  email!: string;

  @Column({type: "text"})
  externalId!: string;
}
