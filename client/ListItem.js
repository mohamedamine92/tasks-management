




Template.ListItem.events({
     'click .toggle-menu': function () {
     	// body...
     	/*Meteor.call('validTask', this._id, this.valid);
     	console.log('valid');
     	console.log(this.author);
     	console.log(Meteor.userId());
     	var a = moment();
     	var b = this.deadline;
       	console.log(a.format('DD-MM-YYYY'));
     	console.log(moment(b).format('DD-MM-YYYY'));
     	console.log(moment(b).diff(a, 'days'));  
     	console.log(moment(this.createdAt));   */	


     	

     },
     
});

Template.ListItem.helpers({
     isOwner: function () {
     	// body...
     	return this.author === Meteor.userId();
     },
     warn: function () {
     	// body...
     	var a = moment();
     	var b = this.deadline;
     	var days =moment(b).diff(a, 'days');
     	if(days < 1)
     	{
     		return true;
     	}
     }
     

});

// Formating deadline(date) to use it in a template
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});


Template.registerHelper('formatage', function(date) {
  return moment(date).fromNow();
});