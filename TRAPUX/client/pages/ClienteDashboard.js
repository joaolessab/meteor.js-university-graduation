Template.ClienteDashboard.helpers({
	//Cada usuário
	users: function(){
		return Meteor.users.find({_id: Meteor.userId()});
	}
});

Template.ClienteDashboard.events({
	
});