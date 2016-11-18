import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
	name: 'App.home',
	action() {
		BlazeLayout.render('app', { main: 'home' });
	}
});

