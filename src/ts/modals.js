"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAddContactModal = showAddContactModal;
exports.showEditContactModal = showEditContactModal;
const contactService_1 = require("./contactService");
const contactUI_1 = require("./contactUI");
function showAddContactModal() {
    const modal = document.getElementById("addContactModal");
    if (modal) {
        modal.classList.remove("d-none");
    }
}
function showEditContactModal(contactId) {
    const contact = (0, contactService_1.getContactById)(contactId);
    if (!contact)
        return;
    const contactDetails = document.getElementById("contactDetails");
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
    const editContactForm = document.getElementById("editContactForm");
    editContactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!contact)
            return;
        contact.firstName = document.getElementById("editFirstName").value;
        contact.lastName = document.getElementById("editLastName").value;
        contact.dateOfBirth = new Date(document.getElementById("editDateOfBirth").value);
        contact.email = document.getElementById("editEmail").value;
        contact.phoneNumber = document.getElementById("editPhoneNumber").value;
        (0, contactUI_1.displayContacts)();
        (0, contactUI_1.showContactDetails)(contact);
        const modal = document.getElementById("addContactModal");
        if (modal) {
            modal.classList.add("d-none");
        }
    });
}
