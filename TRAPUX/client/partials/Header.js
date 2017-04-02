Template.Header.events({
	'click #logonBtn': ()=> {
		$("#login-form").show();
		$("#homeDiv").hide();
	},

	'click #logoutBtn': () => {
		AccountsTemplates.logout();
	}
});