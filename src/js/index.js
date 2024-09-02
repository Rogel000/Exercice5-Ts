import { displayContacts } from "./contactUI.js";
import { showAddContactModal } from "./modals.js";
import { addContact, saveContact } from "./contactService.js";
const addContactForm = document.getElementById("addContactForm");
addContactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showAddContactModal();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const newContact = addContact(firstName, lastName, dateOfBirth, email, phoneNumber);
    saveContact(newContact);
    displayContacts();
    const modal = document.getElementById("addContactModal");
    if (modal) {
        modal.classList.add("d-none");
    }
    addContactForm.reset();
});
displayContacts();
