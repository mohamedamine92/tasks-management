Template.NewTasks.events({
   'click .fa-close' : function() {
   	// body...
   	Session.set('newTask', false);
   }
});