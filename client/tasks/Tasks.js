 

Template.Tasks.onCreated(function () {
	// body...
	var self =this;
	self.autorun(function () {
		// body...
		self.subscribe('tasks');
	});
});


Template.Tasks.helpers({
  tasks: ()=> {
  	return Tasks.find({});
  }

  }); 

Template.Tasks.events({
   'click .new-recipe': () => {
   	Session.set('newTask', true);
   }
});