Template.ClienteDashboard.helpers({
	//Cada usuário
	users: function(){
		return Meteor.users.find({_id: Meteor.userId()});
	}
});

Template.ClienteDashboard.events({
	'click #create': ()=> {
		$(".itemBtn").removeClass("actionSelected");
		$("#create").addClass("actionSelected");

		$(".panels").hide();
		$("#createPanel").show();
	},
	'click #view': ()=> {
		$(".itemBtn").removeClass("actionSelected");
		$("#view").addClass("actionSelected");

		$(".panels").hide();
	},
	'click #evaluate': ()=> {
		$(".itemBtn").removeClass("actionSelected");
		$("#evaluate").addClass("actionSelected");

		$(".panels").hide();
	},
	'click #chart': ()=> {
		$(".itemBtn").removeClass("actionSelected");
		$("#chart").addClass("actionSelected");

		$(".panels").hide();
	},

	//Criando novo chamado no Banco
	'submit #createOrder': function(event){
		var name = event.target.name.value;

		/* Chamando lá do Method */
		Meteor.call('createOrder', name);

		// Setando o valor do input para nada
		event.target.name.value = "";
		return false;
	}
});