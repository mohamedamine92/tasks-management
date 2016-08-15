Team = new Mongo.Collection('team');


Team.allow({
    insert: function (userId, doc) {
    	// body...
    	return !!userId;
    },
    update: function (userId, doc) {
    	// body...
    	return !!userId;
    }
});

teamMember= new SimpleSchema({
   name: {
   	 type: String
   },
   job: {
   	type: String
   },
   rating: {
    	type: Number,
    	defaultValue: 0,
        optional: true,
    	autoform: {
    		type: 'hidden'
    	}
    },
});

Team.attachSchema( teamMember );


Meteor.methods({
    deleteMember: function (id) {
    	// body...
    	Team.remove(id);
    },

	});



