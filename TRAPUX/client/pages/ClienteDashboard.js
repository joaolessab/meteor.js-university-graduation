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
	}	
});