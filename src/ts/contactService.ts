export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
}

export let contacts: Contact[] = [
    {
        id: 1,
        firstName: "Timothy",
        lastName: "Takahashi",
        dateOfBirth: new Date('1980-02-14'),
        email: 'test@test.com',
        phoneNumber: '0606060606'
    }
];
export let currentContactId = 2;

export function addContact(firstName: string, lastName: string, dateOfBirth: Date, email: string, phoneNumber: string): Contact {
    return {
        id: currentContactId++,
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber
    };
}

export function saveContact(contact: Contact): void {
    contacts.push(contact);
}

export function deleteContact(contactId: number): void {
    contacts = contacts.filter(contact => contact.id !== contactId);
}
