import DS from 'ember-data';

var ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'tea-room'
});

export default ApplicationAdapter;
