Template.Recipe.events({
	'click .toogle-menu': function(){
		//Chamando o método dentro do Arquivo Recipes.js 
		Meteor.call('toogleMenuItem', this._id, this.inMenu);
	}
});