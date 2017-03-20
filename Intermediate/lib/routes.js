//Caso o usuário não esteja logado, ele vai direto para a página HOME
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action(){
		//Homepage direcionando para o recipe-book caso o usuário EXISTA
		if (Meteor.userId()){
			FlowRouter.go('recipe-book');
		}
		// Se você quiser adicionar Google Analytics
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		// Se você quiser adicionar Google Analytics
		GAnalytics.pageview();
		//main é a área principal do MainLayout referenciando o template de Test
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});