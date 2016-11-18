import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Debts = new Mongo.Collection('debt');

if (Meteor.isServer) {
	Meteor.publish('debts', (contactId = undefined) => {
		const filter = {};
		if (contactId !== undefined) {
			filter['contact._id'] = contactId;
		}
		return Debts.find(filter);
	});
}

Meteor.methods({
	'debts.insert'(contactId, amount)  {
		check(contactId, String);
		check(amount, Match.where(num => { return !isNaN(parseFloat(amount)) && isFinite(amount); }));

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Debts.insert({
			contact: { _id: contactId },
			amount: amount,
			owner: this.userId
		});
	},

	'debts.remove'(debtId) {
		check(debtId, String);

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Debts.remove(debtId);
	}
});
