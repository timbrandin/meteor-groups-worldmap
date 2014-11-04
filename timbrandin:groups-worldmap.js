Locations = new Meteor.Collection('groups', {
  connection: RemoteGroups,
  transform: function(doc) {
    var sqrt = Math.pow(doc.members, 1/5) - 0.5;
    doc.r = sqrt;
    return new PlaceMark(doc);
  }
});

// Session.set('ready', false);
// Session.set('rendered', false);
// Session.set('launch', false);

// Subscribe.
RemoteGroups.subscribe('groups', function() {
  Session.set('ready', true);
});

Template.meteorGroups.helpers({
  'meteors': function() {
    var meteors = Locations.find({}, {sort: {created: 1}}).fetch();
    _.each(meteors, function(meteor, i) {
      meteor.delay = i/30 + 0.1;
    });
    return meteors;
  }
});
