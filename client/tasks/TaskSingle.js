Template.TaskSingle.onCreated(function () {
	// body...
	var self =this;
	self.autorun(function () {
		// body...
		var id=FlowRouter.getParam('id');
		self.subscribe('singleTask', id);
	});
});


Template.TaskSingle.helpers({
  task: ()=> {
  	var id=FlowRouter.getParam('id');
  	return Tasks.findOne({_id: id });
  }

  }); 


  Template.registerHelper('formatage', function(date) {
  return moment(date).fromNow();
}); 