Template.Recipe.events({
	'click .toogle-menu': function(){
		//Chamando o método dentro do Arquivo Recipes.js 
		Meteor.call('toogleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function() {
		Session.set('editMode', !Session.get('editMode'));
	}
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	}
});