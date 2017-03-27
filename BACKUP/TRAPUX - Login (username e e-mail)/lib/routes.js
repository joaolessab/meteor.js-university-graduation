// ESTA É A HOMEPAGE DO MEU WEBSITE
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// PÁGINA DO DASHBOARD
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});


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