Template.Users.onCreated(function(){
	this.autorun(() =>	{
		this.subscribe('allUsers');
	});
});

Template.Users.helpers({
	users: function(){
		return Meteor.users.find({});
	},
	userEmail: function(){
		//Pegando o primeiro elemento da array
		return this.emails[0].address;
	},
	isAdmin: function(){
		//Checkando cada linha, tem que ser o _id do mongo
		//Usando if inline
		return Roles.userIsInRole(this._id, 'admin') ? 'admin' : 'normal';
	}
});