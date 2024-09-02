import {Contact} from './contact.js';
import {contacts, deleteContact} from "./contactService.js";
import {showEditContactModal} from "./modals.js";


export function displayContacts(): void {
    const contactList = document.getElementById("contactList")!;
    contactList.innerHTML = "";

    contacts.forEach((contact) => {
        const contactItem = document.createElement("li");
        contactItem.textContent = `${contact.firstName} ${contact.lastName}`;
        contactItem.classList.add("list-group-item", "contact-item");
        contactItem.addEventListener("click", () => showContactDetails(contact));

        contactList.appendChild(contactItem);
    });
}

export function showContactDetails(contact: Contact): void {
    const contactDetails = document.getElementById("contactDetails")!;
    contactDetails.innerHTML = `
        <h2>${contact.firstName} ${contact.lastName}</h2>
        <p>Date of birth: ${contact.dateOfBirth.toLocaleDateString()}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone number: ${contact.phoneNumber}</p>
        <button class="btn btn-primary" id="edit-${contact.id}">Edit</button>
        <button class="btn btn-danger" id="delete-${contact.id}">Delete</button>
    `;

    document.getElementById(`edit-${contact.id}`)?.addEventListener("click", () => showEditContactModal(contact.id));
    document.getElementById(`delete-${contact.id}`)?.addEventListener("click", () => {
        deleteContact(contact.id);
        displayContacts();  // Re-render the contact list
        document.getElementById("contactDetails")!.innerHTML = "<p>Select a contact to see details</p>";
    });
}