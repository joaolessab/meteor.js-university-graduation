import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/*Template.hello.onCreated(function helloOnCreated() {
  //counter starts at 0
  this.counter = new ReactiveVar(0);
});*/

Tasks = new Mongo.Collection('tasks');

Template.tasks.helpers({
	/* Está sendo chamado o evento tasks no #each da Listagem */
	tasks: function(){
		return Tasks.find({}, {sort: {createdAt: -1}});
	}
});

/* Eventos, normalmente presentes nos forms */ 
Template.tasks.events({
	"submit .add-task": function(event){
		var name = event.target.name.value;
		
		/* Chamando lá do Method */
		Meteor.call('addTask', name);

		/*
		//Vamos persistir no banco agora
		Tasks.insert({
			name: name,
			createdAt: new Date(),
			//pegando o ID do usuário através da função que já vem pronta quando logado
			userId: Meteor.userId()
		});
		*/

		// Setando o valor do input para nada
		event.target.name.value = "";

		return false;
	},

	"click .delete-task": function(event){
		/* confirm é um alerta de confirmação do Meteor */
		if(confirm('Delete task?')){
			/* _id é criado como uma PrimaryKey para todo novo objeto */
			//Tasks.remove(this._id);
			Meteor.call('deleteTask', this._id);
		}

		return false;
	}
});