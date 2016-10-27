import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Contacts = new Mongo.Collection('contact');

if (Meteor.isServer) {
	Meteor.publish('contacts', (contactId = undefined) => {
		const filter = {};
		if (contactId !== undefined) {
			filter['contact._id'] = contactId;
		}
		return Contacts.find(filter);
	});
}

Meteor.methods({
	'contacts.insert'(name)  {
		check(name, String);

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Contacts.insert({
			name: name
		});
	},

	'contacts.remove'(contactId) {
		check(contactId, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Contacts.remove(contactId);
	}
});
