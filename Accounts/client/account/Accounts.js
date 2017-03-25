/* Título de Formulários */
AccountsTemplates.configure({
    texts: {
      title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Forgot Pwd Title",
        /*captchaVerification: "Captcha verification failed!",
        pwdMismatch: "error.pwdsDontMatch",*/
        resetPwd: "Reset Pwd Title",
        signIn: "Faça o seu Login",
        signUp: "Crie uma conta",
        verifyEmail: "Verify Email Title",
      }
    }
});

/* Configurações básicas */
AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: 'First Name', 
		required: true,
		/* Regex validation */
		re: /(?=.*[a-z])(?=.*[A-Z])/, 
		errStr: '1 lowercase and 1 uppercase letter required'
	},
	{
		_id: 'profession',
		type: 'select',
		select: [
			{
				text: 'Developer',
				value: 'developer'
			},
			{
				text: 'Designer',
				value: 'designer'
			},
			{
				text: 'Other',
				value: 'other'
			}
		]
	}
]);