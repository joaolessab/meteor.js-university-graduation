Template.Header.events({
	'click #logonBtn': ()=> {
		$("#login-form").show();
		$("#homeDiv").addClass("homeDivAdjust");
	},

	'click #logoutBtn': () => {
		AccountsTemplates.logout();
	}
});