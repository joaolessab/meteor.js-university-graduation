/*	//Criando a Collection
Recipes = new Mongo.Collection('recipes');

//Dando autorização para inserção
Recipes.allow({
	insert: function(userId, doc){
		// Se userId existir, então você está logado, então você pode inserir um recipe
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

//Schema de Ingredientes
Ingredient = new SimpleSchema({
	name:{
		type: String
	},
	amount: {
		type: String
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
	ingredients: {
		//Apenas 1 type: Ingredient
		//Vários
		 type: [Ingredient]
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
	inMenu:{
		type: Boolean,
		defaultValue: false,
		optional: true,
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

//Métodos da Collection Recipes
Meteor.methods({
	toogleMenuItem: function(id, currentState){
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		})
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}
});

//Linkando o Schema com a Collection
Recipes.attachSchema(RecipeSchema);