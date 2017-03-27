Copos = new Mongo.Collection('copos');

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