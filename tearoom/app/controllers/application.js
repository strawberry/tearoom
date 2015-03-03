import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
    selectedBrewer: null,
    brewerSelected: false,
    actions:{
	selectBrewer: function(){
	    var allBrewers = this.get('model');
	    var potentialBrewers = [];

	    for(var i = 0; i < allBrewers.content.length; ++i){
		var currentBrewer = allBrewers.content[i];
		if(currentBrewer.get('inRound')){
		    potentialBrewers.push(currentBrewer);
		}
	    }
	    
	    //Get random number between 0 and potential brewers length
	    var selectedBrewerId = Math.floor(Math.random() * (potentialBrewers.length -1));
	    this.set('selectedBrewer', potentialBrewers[selectedBrewerId]);
	    this.set('brewerSelected', true);
	},
	reset: function(){
	    var allBrewers = this.get('model');

	    for(var i = 0; i < allBrewers.content.length; ++i){
		var currentBrewer = allBrewers.content[i];
		currentBrewer.set('inRound', false);
		currentBrewer.save();
	    }
	}
    }
});

export default ApplicationController;
