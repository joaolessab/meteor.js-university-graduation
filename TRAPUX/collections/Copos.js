Copos = new Mongo.Collection('copos');
//Copos.findOne({ name : "Ronaldo" });
//Copos.find({}, {fields: {'name': 0}}).fetch()
//Copos.find({}, {sort: {order: 1}}).fetch()
//https://docs.meteor.com/api/collections.html

// DANDO AUTORIZAÇÃO PARA MEXER COM O COPOS
Copos.allow({
	insert: function(userId, doc){
		// Se userId existir, então você está logado, então você pode inserir um recipe
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});