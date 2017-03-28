//Meteor.users.find({"profile.profession": "gestor"}).fetch();

Template.MyDashboard.helpers({
	//Chama each users
	users: function(){
		return Meteor.users.find({_id: Meteor.userId()});
	},
	checkCliente: function(a){
		return a === 'cliente';
	},
	checkGestor: function(a){
		return a === 'gestor';
	},
	checkDev: function(a){
		return a === 'adesenvolvedor';
	}
});

Template.MyDashboard.events({
	/*'click .user_id': function(){
		console.log(this);
		//Só cria uma sessão com os dados do usuário
		Session.set('currentUser', this);

	}*/
});