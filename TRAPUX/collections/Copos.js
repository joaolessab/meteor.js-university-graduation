//Criando a Collection
Copos = new Mongo.Collection('copos');

//Dando autorização para inserção
/*Copos.allow({
	insert: function(userId, doc){
		// Se userId existir, então você está logado, então você pode inserir um recipe
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});