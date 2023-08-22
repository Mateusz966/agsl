import { DomainEvent } from './domain-event.base';
import { Entity } from './entity.base';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { LoggerPort } from '@libs/ports/logger.port';
import { Logger } from '@nestjs/common';

export abstract class AggregateRoot<EntityProps> extends Entity<EntityProps> {
  private readonly logger = new Logger('AggreateRoot');
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public clearEvents(): void {
    this._domainEvents = [];
  }

  public async publishEvents(eventEmitter: EventEmitter2): Promise<void> {
    this.logger.log('test log');
    await Promise.all(
      this.domainEvents.map(async (event) => {
        this.logger.log(
          `${event.constructor.name} event published for aggregate ${this.constructor.name} : ${this.id}`,
        );
        return eventEmitter.emitAsync(event.constructor.name, event);
      }),
    );
    this.clearEvents();
  }
}
