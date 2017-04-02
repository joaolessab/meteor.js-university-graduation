Template.Header.events({
	'click #logonBtn': ()=> {
		$("#login-form").show();
		$("#homeDiv").hide();
	},

	'click #homeBtn': ()=>{
		$("#login-form").hide();
		$("#homeDiv").show();
	},

	'click #logoutBtn': () => {
		AccountsTemplates.logout();
	}
});