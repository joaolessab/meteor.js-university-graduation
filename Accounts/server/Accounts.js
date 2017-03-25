var postSignUp = function(userId, info){
	/* Voltando no server */
	console.log(userId);
	console.log(info.profile.profession);
	/* Adicionando a Role */
	Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession]);
}

AccountsTemplates.configure({
	postSignUpHook: postSignUp
});