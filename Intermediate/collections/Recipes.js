//Criando a Collection
Recipes = new Meteor.Collection('recipes');

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
		}
	},
	createdAt:{
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		}
	}
});

//Linkando o Schema com a Collection
Recipes.attachSchema(RecipeSchema);