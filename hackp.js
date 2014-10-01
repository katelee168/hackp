//Cat = new Meteor.Collection("cat");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to hackp.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    /*if (Cat.find().count() === 0) {
      var cats = ["cat1",
                  "cat2",
                  "cat3"];
      for (var i = 0; i < cats.length; i++)
        Cat.insert({name: names[i]});
    }*/
  });
}
