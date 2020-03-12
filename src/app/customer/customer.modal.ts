import { Store } from '../store/store.modal';

export class Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    store: Store;
    lastUpdate: string;
}