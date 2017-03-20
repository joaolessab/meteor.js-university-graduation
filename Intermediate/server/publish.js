//Publicando os recipes
Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId});
});