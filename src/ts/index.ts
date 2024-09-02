import {displayContacts} from "./contactUI.js";
import {showAddContactModal} from "./modals.js";
import {addContact, saveContact} from "./contactService.js";

const addContactForm = document.getElementById("addContactForm") as HTMLFormElement;
addContactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showAddContactModal();
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const dateOfBirth = new Date((document.getElementById("dateOfBirth") as HTMLInputElement).value);
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;

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