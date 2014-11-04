Package.describe({
  name: 'timbrandin:groups-worldmap',
  summary: 'Meteor Meetup Groups on a worldmap in SVG.',
  version: '1.0.0',
  git: 'https://github.com/timbrandin/meteor-groups-worldmap'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('standard-app-packages');
  api.use('templating');
  api.use('underscore');
  api.use('timbrandin:groups@1.0.0');
  api.use('timbrandin:worldmap@1.0.0');
  api.use('timbrandin:meteor-icon@1.0.0');

  api.export('Locations');

  api.addFiles('timbrandin:groups-worldmap.html', 'client');
  api.addFiles('timbrandin:groups-worldmap.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('timbrandin:groups-worldmap');
  api.addFiles('timbrandin:groups-worldmap-tests.js');
});
