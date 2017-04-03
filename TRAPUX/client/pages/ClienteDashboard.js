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
	'click .closeBtn': ()=> {
		$(".itemBtn").removeClass("actionSelected");

		$(".panels").hide();
		
		$(".errorMsg").hide();
		$(".sucessMsg").hide();
		
		$("#mainPanel").show();
	},
	'click #clearOrder': ()=> {
		$("#project").val("");
		$("#title").val("");
		$("#type").val("sel");
		$("#description").val("");
	},

	//Criando novo chamado no Banco
	'submit #createOrder': function(event){
		var project = $("#project").val();
		var title = $("#title").val();
		var type = $("#type").val();
		var description = $("#description").val();

		if (type == 'sel'){
			$(".sucessMsg").hide();
			$(".errorMsg").show();
			return false;
		}
		else{
			/* Chamando lá do Method */
			Meteor.call('createOrder', project, title, type, description);
			$(".errorMsg").hide();
			$(".sucessMsg").show();
			return false;
		}
		
	}
});