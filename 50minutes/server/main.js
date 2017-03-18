import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

//SEMPRE CRIE AS TABELAS NO SERVER
Tasks = new Mongo.Collection('tasks');

});


//DEPOIS DE DAR O COMANDO: meteor remove insecure
//Função vão ficar todas em 1 só lugar!
Meteor.methods({
	addTask: function(name){
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access');
		}

		Tasks.insert({
			name: name,
			createdAt: new Date(),
			/* pegando o ID do usuário através da função que já vem pronta quando logado */
			userId: Meteor.userId()
		});

	},

	deleteTask: function(taskId){
		Tasks.remove(taskId);
	}
});