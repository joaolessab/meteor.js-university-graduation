Meteor.methods({
	toggleAdmin(id) {
		if(Roles.userIsInRole(this._id, 'admin')){
			Roles.removeUsersFromRoles(this._id, 'admin');
		}
		else{
			Roles.addUsersToRoles(this._id, 'admin');
		}
	}
})