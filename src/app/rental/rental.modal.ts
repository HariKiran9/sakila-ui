import { Inventory } from '../inventory/inventory.modal';
import { Customer } from '../customer/customer.modal';
import { Staff } from '../staff/staff.model';

export class Rental {
    rentalId: number;
    rentalDate: string;
    inventory: Inventory;
    customer: Customer;
    returnDate: string;
    staff: Staff;
    lastUpdate: string;
}