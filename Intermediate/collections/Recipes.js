//Criando a Collection
Recipes = new Meteor.Collection('recipes');

//Dando autorização para inserção
Recipes.allow({
	insert: function(userId, doc){
		// Se userId existir, então você está logado, então você pode inserir um recipe
		return !!userId;
	}
});

//Criando o Schema
RecipeSchema = new SimpleSchema({
	name: {
		type: String, 
		label: "Name"
	},
	desc:{
		type: String,
		label: "Description"
	},
	author:{
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		//Esse autoform hidden faz com que esse campo esteja escondido no autoForm
		autoform: {
			type: "hidden"
		}
	},
	createdAt:{
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

//Linkando o Schema com a Collection
Recipes.attachSchema(RecipeSchema);