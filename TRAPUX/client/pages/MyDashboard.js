//Meteor.users.find({"profile.profession": "gestor"}).fetch();

Template.MyDashboard.helpers({
	//Chama each users
	users: function(){
		return Meteor.users.find({_id: Meteor.userId()});
	},
	checkOccupation: function(a){
		return a === 'cliente';
	}
});

Template.MyDashboard.events({
	/*'click .user_id': function(){
		console.log(this);
		//Só cria uma sessão com os dados do usuário
		Session.set('currentUser', this);

	}*/
});