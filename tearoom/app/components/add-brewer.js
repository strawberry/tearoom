import Ember from 'ember';

var AddBrewerComponent = Ember.Component.extend({
    store: null,
    actions:{
	addBrewer: function(){
	    var name = this.get('brewerName');
	    var brewer = this.store.createRecord('brewer', {
		name: name,
		inRound: false
		});
	    this.set('brewerName', '');
	    brewer.save();
	}
    }
});

export default AddBrewerComponent;
