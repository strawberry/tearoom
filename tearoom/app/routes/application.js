import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
    model: function(){
	return this.store.find('brewer');
    }
});

export default ApplicationRoute;
