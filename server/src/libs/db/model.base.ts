import { PrimaryKey, Property } from '@mikro-orm/core';

export abstract class ModelBase {
  @PrimaryKey()
  id: string;
  @Property()
  createdAt: Date = new Date();
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
