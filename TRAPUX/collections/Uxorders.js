Uxorders = new Mongo.Collection('uxorders');

// DANDO AUTORIZAÇÃO PARA MEXER COM O UXORDERS
Uxorders.allow({
	insert: function(userId, doc){
		// Se userId existir, então você está logado, então você pode inserir um recipe
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

//Métodos da Collection Uxorders
Meteor.methods({
	createOrder: function(project, title, type, description){
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access');
		}
		Uxorders.insert({
			project: project,
			title: title,
			type: type,
			description: description,
			status: 'open',
			createdAt: new Date(),
			userId: Meteor.userId()
		});
	}
});