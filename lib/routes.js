if(Meteor.isClient){
Accounts.onLogin(function () {
    // body...
    FlowRouter.go('tasks');
});

Accounts.onLogout(function () {
    // body...
    FlowRouter.go('home');
});
}



FlowRouter.triggers.enter([function (context, redirect) {
    // body...
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);




FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()){
            FlowRouter.go('tasks');
        }
    	BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/tasks', {
    name: 'tasks',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'Tasks'});
    }
});

FlowRouter.route('/task/:id', {
    name: 'task-detail ',
    action() {
    	BlazeLayout.render('MainLayout', {main: 'TaskSingle'});
    }
});

FlowRouter.route('/list', {
    name: 'list ',
    action() {
        BlazeLayout.render('MainLayout', {main: 'List'});
    }
});


FlowRouter.route('/team', {
    name: 'team ',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Team'});
    }
});