import { Store } from '../store/store.modal';
import { Film } from '../film/film.model';

export class Inventory {
    inventoryId: number;
    film: Film;
    store: Store;
    lastUpdate: string;
}