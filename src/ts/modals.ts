import {addContact, saveContact, contacts} from './contactService.js';
import { displayContacts, showContactDetails } from './contactUI.js';

export function showEditContactModal(contactId: number): void {
    const contact = contacts.find(c => c.id === contactId);
    if (!contact) return;

    const contactDetails = document.getElementById("contactDetails")!;
    contactDetails.innerHTML = `
        <h2>Edit contact</h2>
        <form id="editContactForm">
            <input type="text" id="editFirstName" value="${contact.firstName}" class="form-control" placeholder="First name" required>
            <input type="text" id="editLastName" value="${contact.lastName}" class="form-control" placeholder="Last name" required>
            <input type="date" id="editDateOfBirth" value="${contact.dateOfBirth.toISOString().split('T')[0]}" class="form-control" required>
            <input type="email" id="editEmail" value="${contact.email}" class="form-control" placeholder="Email" required>
            <input type="tel" id="editPhoneNumber" value="${contact.phoneNumber}" class="form-control" placeholder="Phone number" required>
            <button type="submit" class="btn btn-primary mt-3">Save</button>
        </form>
    `;

    const editContactForm = document.getElementById("editContactForm") as HTMLFormElement;
    editContactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        contact.firstName = (document.getElementById("editFirstName") as HTMLInputElement).value;
        contact.lastName = (document.getElementById("editLastName") as HTMLInputElement).value;
        contact.dateOfBirth = new Date((document.getElementById("editDateOfBirth") as HTMLInputElement).value);
        contact.email = (document.getElementById("editEmail") as HTMLInputElement).value;
        contact.phoneNumber = (document.getElementById("editPhoneNumber") as HTMLInputElement).value;

        displayContacts();
        showContactDetails(contact);
    });
}


export function showAddContactModal(): void {
    const modal = document.getElementById("addContactModal");
    if (modal) {
        modal.classList.remove("d-none");
    }
}
