import Ember from 'ember';

var BrewerItemComponent = Ember.Component.extend({
    actions: {
	toggleRound: function(){
	    var brewer = this.get('model');
	    brewer.set('inRound', !brewer.get('inRound'));
	    brewer.save();
	},
	deleteBrewer: function(){
	    var brewer = this.get('model');
	    brewer.destroyRecord();
	}
    }
});

export default BrewerItemComponent;
