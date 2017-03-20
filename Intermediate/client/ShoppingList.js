Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

//Criando os helpers para o Recipes
Template.ShoppingList.helpers({
	shoppingList: () => {
		return Recipes.find({inMenu: true});
	}
});