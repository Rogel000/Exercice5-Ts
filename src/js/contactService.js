export let contacts = [
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
export function addContact(firstName, lastName, dateOfBirth, email, phoneNumber) {
    return {
        id: currentContactId++,
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber
    };
}
export function saveContact(contact) {
    contacts.push(contact);
}
export function deleteContact(contactId) {
    contacts = contacts.filter(contact => contact.id !== contactId);
}
