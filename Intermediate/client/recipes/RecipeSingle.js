//Recebendo e lendo a Collection do banco, não precisa fazer mais nada
//Meteor.subscribe('recipes');

//Função criada para limpar e criar de novo, reuso apenas
Template.RecipeSingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

//Criando os helpers para o RecipeSingle
Template.RecipeSingle.helpers({
	//Cuidado com o nome da função
	recipe: () => {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});