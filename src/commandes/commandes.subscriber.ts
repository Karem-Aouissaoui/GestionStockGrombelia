import { StockService } from 'src/stock/stock.service';
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
  constructor(private stockService: StockService) {}
  listenTo() {
    return Commande;
  }

  // entrer stock
  /*
  async afterUpdate(event: UpdateEvent<Commande>) {
    console.log('triggered commande subscriber!!');

    const commande = await getRepository(Commande).findOne(event.entity.id, {
      relations: ['ligneCommandes'],
    });
    //console.log(commande);
    /*
    let recept = commande.ligneCommandes.filter((a) => a.etat == true);
    recept.forEach((a) => {
      this.stockService.create(a.ligneToStock());
    });
    //console.log(recept);
    //console.log(recept);
  }*/
}
