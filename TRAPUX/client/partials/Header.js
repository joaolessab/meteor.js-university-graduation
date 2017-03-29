Template.Header.events({
	'click #logonBtn': ()=> {
		$("#login-form").show();
	},

	'click #logoutBtn': () => {
		AccountsTemplates.logout();
	}
});