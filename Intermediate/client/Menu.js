//Função criada para limpar e criar de novo, reuso apenas
Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

//Criando os helpers para o Recipes
Template.Menu.helpers({
	recipes: () => {
		return Recipes.find({inMenu: true});
	}
});