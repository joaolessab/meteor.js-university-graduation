import moment from 'moment';

Template.Users.onCreated(function(){
	this.autorun(() =>	{
		this.subscribe('allUsers');
	});
});

Template.Users.helpers({
	users: function(){
		return Meteor.users.find({});
	},
	userEmail: function(){
		//Pegando o primeiro elemento da array
		return this.emails[0].address;
	},
	isAdmin: function(){
		//Checkando cada linha, tem que ser o _id do mongo
		//Usando if inline
		//return Roles.userIsInRole(this._id, 'admin') ? 'admin' : 'normal';
		return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
	},
	dateFormat: function(){
		//Função do Moment
		return moment(this.createdAt).format('D MMMM YYYY hh')
	},
	editMode: function(){
		//Usamos a sessão para verificar se há algo dentro do currentUser clicado, se houver ele habilta a edição, se não, ele nem mostra
		return Session.get('currentUser') ? 'edit-mode': '';
	},
	currentEdit: function(){
		let user = Session.get('currentUser');
		return user._id === this._id;
	}
});

Template.Users.events({
	'click .user_id': function(){
		console.log(this);
		//Só cria uma sessão com os dados do usuário
		Session.set('currentUser', this);

	},
	'click .toggle-admin': function(){
		//Chamando o server side Method toogleAdmin e passando o id do usuário atual
		//Meteor.call('toggleAdmin', this._id);
		Meteor.call('toggleAdmin', this._id);
	},
	'click .close-edit-mode': function(){
		Session.set('currentUser', null);
	}
});