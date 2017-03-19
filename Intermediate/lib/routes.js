FlowRouter.route('/', {
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		//main é a área principal do MainLayout referenciando o template de Test
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

