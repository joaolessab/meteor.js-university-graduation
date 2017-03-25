Template.Users.onCreated(function(){
	this.autorun(() =>	{
		this.subscribe('allUsers');
	});
});