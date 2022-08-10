import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';

// const invOne = new Invoice('Aditya', 'work on his app', 700);
// console.log(invOne, invOne.format(), invOne.amount, invOne.client /*,invOne.details => private*/)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;

const ListItem = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()

    let doc: Invoice | Payment;

    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    if (type.value === 'invoice') {
        ListItem.render(doc, type.value.toUpperCase(), 'start');
    } else {
        ListItem.render(doc, type.value.toUpperCase(), 'end');
    }
        
});