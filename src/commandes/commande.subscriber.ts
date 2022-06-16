import {
  EntitySubscriberInterface,
  EventSubscriber,
  getRepository,
  LoadEvent,
  UpdateEvent,
} from 'typeorm';
import { Commande } from './entities/commande.entity';
import { LigneCommande } from './entities/ligneCommande.entity';

@EventSubscriber()
export class CommandeSubscriber implements EntitySubscriberInterface<Commande> {
  /**
   * Indicates that this subscriber only listen to Post events.
   */
  listenTo() {
    return Commande;
  }

  async afterUpdate(event: UpdateEvent<Commande>) {
    const commande = await getRepository(Commande).findOne(event.entity.id, {
      relations: ['ligneCommandes'],
    });
    console.log(commande);

    let recept = commande.ligneCommandes.filter((a) => a.etat == true);
    console.log(recept);
  }
}
