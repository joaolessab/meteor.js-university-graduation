Template.MainNav.events({
	'click .login-toggle': ()=> {
		Session.set('nav-toggle', 'open');
	},

	'click .logout': () =>{
		//Meteor.logout();
		/* Chamando a função que está definida dentro de onLogoutHook */
		AccountsTemplates.logout();
	}
});