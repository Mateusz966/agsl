import { IdentifiableEntitySchema } from '../../database/identifiable-entity.schema';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserSchema extends IdentifiableEntitySchema {
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
