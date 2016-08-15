Template.Team.onCreated(function () {
	// body...
	this.newMember = new ReactiveVar(true);
	var self =this;
	self.autorun(function () {
		// body...
		self.subscribe('team');
		self.subscribe('tasks');
	});
});


Template.Team.helpers({
  teamMembers: ()=> {
  	return Team.find({}, {sort:{rating:-1}});
  },
   newMember: function() {
  	// body...
  	return Template.instance().newMember.get();
  }
});

Template.Team.events({
   'click .js-rate': function(event) {
   	// body...
        if(Meteor.user().emails[0].address ==="admin@gmail.com")
           {
              var rating =$(event.currentTarget).data("userrating");
              //console.log(rating);
              var member_id =this.id;
             // console.log(member_id);

              Team.update({_id:member_id},{$set: {rating:rating}});
               //Meteor.call('rateTask',member_id,rating);
              //console.log(Meteor.user().emails[0].address);
           }
   },
   'click .btn': (event, template) => {
   	template.newMember.set(true);
   	console.log('click');
   },
   'click .fa-times' : function(event, template) {
   	// body...
   	template.newMember.set(false);

   },
   'click .fa-trash': function () {
   	// body...
         Meteor.call('deleteMember', this._id);
         console.log('clicked');
   },

});