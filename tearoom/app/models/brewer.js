import DS from 'ember-data';

var BrewerModel = DS.Model.extend({
    name: DS.attr('string'),
    inRound: DS.attr('boolean')
});

//BrewerModel.reopenClass({
//  FIXTURES: [
//	{
//	    id: 1,
//	    name: "Ant",
//	    inRound: false
//	},
//	{
//	    id: 2,
//	    name: "Daz",
//	    inRound: false
//	},
//	{
//	    id: 3,
//	    name: "Matt Weldon",
//	    inRound: false
//	},
//	{
//	    id: 4,
//	    name: "Stu",
//	    inRound: false
//	}
//  ]
//});

export default BrewerModel;
