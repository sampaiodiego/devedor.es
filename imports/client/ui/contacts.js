import { Contacts } from '../../api/contacts.js';

Template.contacts.helpers({
	contacts() {
		return Contacts.find();
	}
});

Template.contacts.onCreated(function() {
	this.subscribe('contacts');
})
