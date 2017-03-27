//ARQUIVO INDEPENDENTE DE HTML, IRÁ CONFIGURAR APENAS O FORMULÁRIO

var myLogoutFunc = function(){
	/* Redirecionando */
	FlowRouter.go('/');

	/* Resetando uma variável zoada */
	Session.set('nav-toggle', '');
}


/* Título de Formulários */
AccountsTemplates.configure({
    texts: {
      title: {
        signIn: "Faça o seu Login",
        signUp: "Crie uma conta"
      },
      signUpLink_pre: "Não possui uma conta?",
      signUpLink_link: "(Crie uma)",
      signInLink_pre: "Já possui uma conta?", 
      signInLink_link: "(Entrar)"
    }, 
    confirmPassword: false,
    onLogoutHook: myLogoutFunc
});


AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
/*ADICIONANDO CAMPOS DE LOGIN / CRIAÇÃO*/
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "Nome de Usário: ",
      placeholder: "Digite o nome de usuário",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "E-mail: ",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'E-mail inválido',
  },
  //COM ESSE CAMPO, USUÁRIO PODE ENTRAR COM USERNAME OU COM E-MAIL
  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: 'Login / E-mail: ',
      placeholder: 'Digite seu login ou seu e-mail'
  },
  {
      _id: 'password',
      type: 'password',
      required: true,
      displayName: 'Senha: ',
      placeholder: 'Digite a sua senha'
  }
]);

/*ADICIONANDO CAMPOS DE REGISTRO*/
AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: 'Nome Completo: ',
		placeholder: 'Digite seu nome',
		required: true,
		/* Regex validation */
		re: /(?=.*[a-z])(?=.*[A-Z])/, 
		errStr: '1 lowercase and 1 uppercase letter required'
	},
	{
		_id: 'profession',
		type: 'select',
		displayName: 'Tipo de Usuário: ',
		select: [
			{
				text: 'Gestor de Operações',
				value: 'gestor'
			},
			{
				text: 'Analista / Desenvolvedor',
				value: 'adesenvolvedor'
			},
			{
				text: 'Cliente',
				value: 'cliente'
			}
		]
	}
]);