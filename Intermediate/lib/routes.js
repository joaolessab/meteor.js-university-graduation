FlowRouter.route('/', {
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/test', {
	name: 'test',
	action(){
		//main é a área principal do MainLayout referenciando o template de Test
		BlazeLayout.render('MainLayout', {main: 'Test'});
	}
});