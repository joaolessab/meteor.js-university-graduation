//Recebendo e lendo a Collection do banco, não precisa fazer mais nada
Meteor.subscribe('recipes');

//Criando os helpers para o Recipes
Template.Recipes.helpers({
	recipes: () => {
		return Recipes.find({});
	}
});