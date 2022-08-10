export class Invoice {
    // client: string;
    // details: string;
    // public amount: number; //can add access-modifier as here
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, details, amount //Can add access-modifier as here too, where this will itself initialize the vars to the args
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes me ${this.amount} for ${this.details}`;
    }
}
