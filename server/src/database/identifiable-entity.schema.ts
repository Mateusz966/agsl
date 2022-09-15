import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class IdentifiableEntitySchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
