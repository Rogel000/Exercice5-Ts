import { contacts, deleteContact } from "./contactService.js";
import { showEditContactModal } from "./modals.js";
export function displayContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
        const contactItem = document.createElement("li");
        contactItem.textContent = `${contact.firstName} ${contact.lastName}`;
        contactItem.classList.add("list-group-item", "contact-item");
        contactItem.addEventListener("click", () => showContactDetails(contact));
        contactList.appendChild(contactItem);
    });
}
export function showContactDetails(contact) {
    var _a, _b;
    const contactDetails = document.getElementById("contactDetails");
    contactDetails.innerHTML = `
        <h2>${contact.firstName} ${contact.lastName}</h2>
        <p>Date of birth: ${contact.dateOfBirth.toLocaleDateString()}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone number: ${contact.phoneNumber}</p>
        <button class="btn btn-primary" id="edit-${contact.id}">Edit</button>
        <button class="btn btn-danger" id="delete-${contact.id}">Delete</button>
    `;
    (_a = document.getElementById(`edit-${contact.id}`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => showEditContactModal(contact.id));
    (_b = document.getElementById(`delete-${contact.id}`)) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        deleteContact(contact.id);
        displayContacts(); // Re-render the contact list
        document.getElementById("contactDetails").innerHTML = "<p>Select a contact to see details</p>";
    });
}
