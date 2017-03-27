//LOGIN E LOGOUT
if (Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('dashboard');   
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');  
    });
}
///////////////////////////////////////////

// ESTA É A HOMEPAGE DO MEU WEBSITE
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

//PÁGINA DO MEU NOVO DASHBOARD
FlowRouter.route('/mydash', {
    name: 'mydash',
    action(){
        BlazeLayout.render("SystemLayout", {main: "MyDashboard"});
    }
});


// PÁGINA DO DASHBOARD
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});

///////////////////////////////////////////
// GROUP ROUTER PARA O USER
var adminRoutes = FlowRouter.group({
	prefix: '/admin',
	name: 'admin'
});

// Users Route
adminRoutes.route('/users', {
	name: 'users',
	action(){
		BlazeLayout.render("AppLayout", {main: "Users"});
	}
});