FlowRouter.route('/', {
	name: 'home',
	action(){
		// Se você quiser adicionar Google Analytics
		// GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		// Se você quiser adicionar Google Analytics
		// GAnalytics.pageview();
		//main é a área principal do MainLayout referenciando o template de Test
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe-book',
	action(){
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});