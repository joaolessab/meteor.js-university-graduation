Uxorders = new Mongo.Collection('uxorders');
//Copos.findOne({ name : "Ronaldo" });
//Copos.find({}, {fields: {'name': 0}}).fetch()
//Copos.find({}, {sort: {order: 1}}).fetch()
//https://docs.meteor.com/api/collections.html

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
	createOrder: function(project, title, description){
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access');
		}

		Uxorders.insert({
			project: project,
			title: title,
			description: description,
			status: 'open',
			createdAt: new Date(),
			userId: Meteor.userId()
		});

	}
});