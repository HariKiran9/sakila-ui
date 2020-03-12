import { Deserializable } from '../deserializable.model';
import { City } from '../city/city.model';

export class Address implements Deserializable {
    addressId: number;
    address: string;
    address2: string;
    district: string;
    city: City;
    postalCode: string;
    phone: string;
    lastUpdate: string;
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
    
    constructor() {

    }
}