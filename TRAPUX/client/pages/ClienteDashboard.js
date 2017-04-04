Template.ClienteDashboard.onCreated(function () {
});

Template.ClienteDashboard.helpers({
	//Cada usuário
	users: function(){
		return Meteor.users.find({_id: Meteor.userId()});
	},
	lastOrders: function(){
		//Filtrando as últimas 3 orders
		return Uxorders.find({userId: Meteor.userId()}, { sort: { createdAt: 'desc' }, limit: 6 });
	},
	uxorder: function(){
		//Filtrando as últimas 3 orders
		return Uxorders.find({userId: Meteor.userId()}, { sort: { createdAt: 'desc' }});
	}
});

Template.ClienteDashboard.events({
	'click #create': ()=> {
		$(".panels").hide();
		$("#createPanel").show();
	},
	'click #view': ()=> {
		$(".panels").hide();
		$("#viewPanel").show();
	},
	'click #evaluate': ()=> {
		$(".panels").hide();
	},
	'click #report': ()=> {
		$(".panels").hide();
	},
	'click .closeBtn': ()=> {
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
		$(".errorMsg").hide();
		return false;
	},

	//Criando novo chamado no Banco
	'submit #createOrder': function(event){
		var project = $("#project").val();
		var title = $("#title").val();
		var type = $("#type").val();
		var description = $("#description").val();

		
		if (project == ''){
			$(".sucessMsg").hide();
			$(".errorMsg").text("*Referencie o projeto ou nomeie um");
			$(".errorMsg").show();
			return false;
		}
		else if (title == ''){
			$(".sucessMsg").hide();
			$(".errorMsg").text("*Título não pode estar em branco");
			$(".errorMsg").show();
			return false;
		}		
		else if (type == 'sel'){
			$(".sucessMsg").hide();
			$(".errorMsg").text("*Selecione um valor para o tipo");
			$(".errorMsg").show();
			return false;
		}
		else if (description.length < 10 == true){
			$(".sucessMsg").hide();
			$(".errorMsg").text("*Descrição não pode conter menos de 10 caracteres");
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