"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContact = addContact;
exports.saveContact = saveContact;
exports.deleteContact = deleteContact;
exports.getContacts = getContacts;
exports.getContactById = getContactById;
let contacts = [
    {
        id: 1,
        firstName: "Timothy",
        lastName: "Takahashi",
        dateOfBirth: new Date('1980-02-14'),
        email: 'test@test.com',
        phoneNumber: '0606060606'
    }
];
let currentContactId = 2;
function addContact(firstName, lastName, dateOfBirth, email, phoneNumber) {
    return {
        id: currentContactId++,
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber
    };
}
function saveContact(contact) {
    contacts.push(contact);
}
function deleteContact(contactId) {
    contacts = contacts.filter(contact => contact.id !== contactId);
}
function getContacts() {
    return contacts;
}
function getContactById(contactId) {
    return contacts.find(c => c.id === contactId);
}
