"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactUI_1 = require("./contactUI");
const contactService_1 = require("./contactService");
window.editContact = (contactId) => {
    Promise.resolve().then(() => __importStar(require('./modals'))).then(({ showEditContactModal }) => showEditContactModal(contactId));
};
window.deleteContact = (contactId) => {
    Promise.resolve().then(() => __importStar(require('./contactService'))).then(({ deleteContact }) => {
        deleteContact(contactId);
        (0, contactUI_1.displayContacts)();
        document.getElementById("contactDetails").innerHTML = "<p>Select a contact to see details</p>";
    });
};
const addContactForm = document.getElementById("addContactForm");
addContactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const newContact = (0, contactService_1.addContact)(firstName, lastName, dateOfBirth, email, phoneNumber);
    (0, contactService_1.saveContact)(newContact);
    (0, contactUI_1.displayContacts)();
    const modal = document.getElementById("addContactModal");
    if (modal) {
        modal.classList.add("d-none");
    }
    addContactForm.reset();
});
(0, contactUI_1.displayContacts)();
