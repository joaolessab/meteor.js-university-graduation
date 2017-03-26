// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});


// GROUP ROUTER
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