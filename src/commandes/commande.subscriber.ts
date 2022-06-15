import { EntitySubscriberInterface, EventSubscriber, LoadEvent } from 'typeorm';
import { Commande } from './entities/commande.entity';

@EventSubscriber()
export class CommandeSubscriber implements EntitySubscriberInterface<Commande> {
  /**
   * Indicates that this subscriber only listen to Post events.
   */
  listenTo() {
    return Commande;
  }

  /*async afterLoad(entity: Commande, event?: LoadEvent<Commande>): void | Promise<any> {
      
  }*/
}
