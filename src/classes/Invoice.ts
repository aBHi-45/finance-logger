import { HasFormatter } from "../interface/HasFormatter"

export class Invoice implements HasFormatter{
    // client: string;
    // details: string;
    // public amount: number; //can add access-modifier as here

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    constructor(
        readonly client: string,
        private details: string,
        public amount: number  //Can add access-modifier as here too, where this will itself initialize the vars to the args
    ) { }
    
    format(): string{
        return `${this.client} owes me ${this.amount} for ${this.details}`
    }
}