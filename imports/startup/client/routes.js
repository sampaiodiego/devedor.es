import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../client/ui/layouts/app.html';
import '../../client/ui/header.html';
import '../../client/ui/home.html';

FlowRouter.route('/', {
	name: 'App.home',
	action() {
		BlazeLayout.render('app', { main: 'home' });
	}
});

