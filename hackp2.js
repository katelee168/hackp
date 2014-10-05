Categores = new Meteor.Collection("categories");

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