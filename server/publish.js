Meteor.publish('tasks',function () {
	// body...
      return Tasks.find({author:this.userId});
});

Meteor.publish('singleTask',function (id) {
	// body...
	check(id, String);
      return Tasks.find({_id: id});
});


Meteor.publish('listTasks',function () {
	// body...
      return Tasks.find({});
});

Meteor.publish('team',function () {
	// body...
      return Team.find({}); 
});