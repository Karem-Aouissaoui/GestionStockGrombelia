import {
  Any,
  Entity,
  EntitySubscriberInterface,
  EventSubscriber,
  getRepository,
  InsertEvent,
} from 'typeorm';
import { Stock } from './entities/stock.entity';

@EventSubscriber()
export class StockSubscriber implements EntitySubscriberInterface<Stock> {
  /**
   * Indicates that this subscriber only listen to Post events.
   */
  listenTo() {
    return Stock;
  }

  /**
   * Called before post insertion.
   */
  test: boolean = false;
}
