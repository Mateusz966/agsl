import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";

export abstract class BaseEntity<T> {
  @PrimaryColumn({ type: "uuid" })
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  public static create<T extends BaseEntity<T>>(
    this: new () => T,
    data: Partial<T>
  ): T {
    const entity = new this();
    Object.assign(entity, data);
    if (!entity.id) entity.id = v4();
    return entity;
  }
}
