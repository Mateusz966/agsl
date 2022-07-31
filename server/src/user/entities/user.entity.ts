import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

@Entity('user')
@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => [String])
  @Column({ type: 'varchar', name: 'first_name' })
  firstName: string;

  @Field(() => [String])
  @Column({ type: 'varchar', name: 'last_name' })
  lastName: string;

  @HideField()
  @Exclude()
  @Column({ type: 'text' })
  password: string;

  @Field(() => [Boolean])
  @Column({ default: true, name: 'is_active' })
  isActive: boolean;
}
