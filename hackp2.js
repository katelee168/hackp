Categories = new Meteor.Collection("categories");

if (Meteor.isClient) {
	Template.collections.categories = function() {
		return Categories.find().fetch();
	}

	Template.collections.events({
		'click input.inc': function() {
			Categories.update(Session.get("selected_player"), {chosen: !Session.get("selected_player")});
		}
	})
}

// Set up database
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Categories.find().count() === 0) {
			var categories = ["cat1", "cat2", "cat3"];
			for (var i = 0; i < names.length; i++)
				Categories.insert({name: categories[i], chosen: false})
		}
	});
}