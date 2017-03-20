//Recebendo e lendo a Collection do banco, não precisa fazer mais nada
//Meteor.subscribe('recipes');

//Função criada para limpar e criar de novo, reuso apenas
Template.Recipes.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

//Criando os helpers para o Recipes
Template.Recipes.helpers({
	recipes: () => {
		return Recipes.find({});
	}
});