import {
  Any,
  EntitySubscriberInterface,
  EventSubscriber,
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
  /*
  async afterInsert(event: InsertEvent<Stock>) {
    //const stock = event.entity;

    const rep = await event.queryRunner.manager.getRepository(Stock);
    const stock: Stock = await rep.findOne(event.entity.id, {
      relations: ['article'],
    });
    console.log(stock);

    if (stock.article.qte < stock.article.qte_alert && !this.test) {
      this.test = true;
      console.log('alert 1');
    }
  }*/
}
