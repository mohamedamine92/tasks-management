Tasks = new Mongo.Collection('tasks');
if (Meteor.isClient) {
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});
}

Tasks.allow({
    insert: function (userId, doc) {
    	// body...
    	return !!userId;
    },
    update: function (userId, doc) {
    	// body...
    	return !!userId;
    }
});


member= new SimpleSchema({
   name: {
   	 type: String
   },
   job: {
   	type: String
   }
});

TaskSchema =new SimpleSchema({
    name: {
    	type: String,
    	label: "Name"
    },
    desc: {
    	type: String,
    	label: "Description"
    },
    member: {
    	type:[member]
    },
    rating: {
    	type: Number,
    	defaultValue: 0,
        optional: true,
    	autoform: {
    		type: 'hidden'
    	}
    },

    inTasks: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: 'hidden'
        }
    },


    deadline: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
    
    valid: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: 'hidden'
        }
    },
    warn: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: 'hidden'
        }
    },


    author:{
    	type: String,
    	label: "Author",
    	autoValue: function () {
    		// body...
    		return this.userId
    	},
    	autoform: {
    		type: "hidden"
    	}
    },
    createdAt: {
    	type: Date,
    	label: "Created At",
    	autoValue: function () {
    		// body...
    		return new Date()
    	},
    	autoform: {
    		type: "hidden"
    	}
    },
 
});

Meteor.methods({
    toggleMenuItem: function(id, currentState){
    	Tasks.update(id, {
    		$set: {
    			inTasks: !currentState
    		}
    	});
    },
    deleteTask: function (id) {
    	// body...
    	Tasks.remove(id);
    },
    validTask: function(id, currentState){
    	// body...
    	Tasks.update(id, {
    		$set: {
    			valid: !currentState
    		}
    	});
    	
    },
    warnTask: function (id, currentState) {
    	// body...
    	Tasks.update(id, {
    		$set: {
    			warn: true
    		}
    	});
    },
    
});

Tasks.attachSchema( TaskSchema );








