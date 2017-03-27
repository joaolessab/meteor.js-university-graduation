//Meteor.users.find({});
//Meteor.users.find({"username": "cristiano"}).fetch();

Template.Dashboard.helpers({
	admin: function(){
		return Roles.userIsInRole(Meteor.userId(), 'admin');
	}
})