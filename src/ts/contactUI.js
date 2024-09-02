"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayContacts = displayContacts;
exports.showContactDetails = showContactDetails;
const contactService_1 = require("./contactService");
function displayContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";
    (0, contactService_1.getContacts)().forEach((contact) => {
        const contactItem = document.createElement("li");
        contactItem.textContent = `${contact.firstName} ${contact.lastName}`;
        contactItem.classList.add("list-group-item", "contact-item");
        contactItem.addEventListener("click", () => showContactDetails(contact));
        contactList.appendChild(contactItem);
    });
}
function showContactDetails(contact) {
    const contactDetails = document.getElementById("contactDetails");
    contactDetails.innerHTML = `
        <h2>${contact.firstName} ${contact.lastName}</h2>
        <p>Date of birth: ${contact.dateOfBirth.toLocaleDateString()}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone number: ${contact.phoneNumber}</p>
        <button class="btn btn-primary" onclick="editContact(${contact.id})">Edit</button>
        <button class="btn btn-danger" onclick="deleteContact(${contact.id})">Delete</button>
    `;
}
