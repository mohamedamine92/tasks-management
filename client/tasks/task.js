Template.Task.onCreated(function() {
	// body...
	this.editMode = new ReactiveVar(false);
	//this.editMode.set(false);
});





Template.Task.helpers({
  updateTaskId: function() {
  	// body...
    return this._id;
  },
  editMode: function() {
  	// body...
  	return Template.instance().editMode.get();
  }

  }); 



Template.Task.events({
   'click .toggle-menu': function () {
   	// body...
         Meteor.call('toggleMenuItem', this._id, this.inTasks);
   },
   'click .fa-trash': function () {
   	// body...
         Meteor.call('deleteTask', this._id);
   },
   'click .fa-pencil': function(event, template) {
   	// body...
      //Session.set('editMode', !Session.get('editMode'));
          template.editMode.set(!template.editMode.get());
   }
});