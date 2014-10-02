// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Categories = new Meteor.Collection("players");

if (Meteor.isClient) {
  Template.leaderboard.players = function () {
    return Categories.find().fetch();
  };

  Template.leaderboard.selected_name = function () {
    var player = Categories.findOne(Session.get("selected_player"));
    return player && player.name;
  };

  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };

  Template.leaderboard.events({
    'click input.inc': function () {
      Categories.update(Session.get("selected_player"), {chosen: true});
    }
  });

  Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });

}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Categories.find().count() === 0) {
      var names = ["cat1, cat2, cat3"];
      for (var i = 0; i < names.length; i++)
        Categories.insert({name: names[i], chosen: false});
    }
  });
}
