import { Staff } from '../staff/staff.model';
import { Address } from '../address/address.model';

export class Store {
    storeId: number;
    staff: Staff;
    address: Address;
    lastUpdate: string;
}