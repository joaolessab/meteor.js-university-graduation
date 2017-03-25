var postSignUp = function(userId, info){
	/* Voltando no console */
	console.log(userId);
	console.log(info);
}

AccountsTemplates.configure({
	postSignUpHook: postSignUp
});