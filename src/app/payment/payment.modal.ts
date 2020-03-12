import { Customer } from '../customer/customer.modal';
import { Staff } from '../staff/staff.model';
import { Rental } from '../rental/rental.modal';

export class Payment {
    paymentId: number;
    customer: Customer;
    staff: Staff;
    rental: Rental;
    amount: number;
    paymentDate: string;
    lastUpdate: string;
}