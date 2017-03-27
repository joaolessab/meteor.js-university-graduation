//Meteor.users.find({"profile.profession": "gestor"}).fetch();

Template.MyDashboard.helpers({
	kindaOfUser: function(){
		/* Retornando o meu usário apenas */
		return Meteor.users.find({_id: Meteor.userId()});
	}
});

Template.MyDashboard.events({

});