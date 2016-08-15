Template.List.onCreated(function () {
	// body...
	var self =this;
	
	self.autorun(function () {
		// body...
		self.subscribe('listTasks');
	});
});


Template.List.helpers({
  tasks: ()=> {
  	return Tasks.find({inTasks: true});
  },
  

  }); 




