import { Deserializable } from '../deserializable.model';
import { Address } from '../address/address.model';

export class Staff implements Deserializable {
    staffId: number;
    firstName: string;
    lastName: string;
    address: Address;
    email: string;
    active: number;
    userName: string;
    password: string;
    lastUpdate: string;
    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        Object.assign(this, input);

        // Iterate over all cars for our user and map them to a proper `Car` model
        //this.address = input.address.map(address => new Address().deserialize(address));
        // this.address = new Address().deserialize(input.address);
        return this;
    }

    constructor() {

    }

}