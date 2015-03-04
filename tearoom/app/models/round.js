import DS from 'ember-data';

var RoundModel = DS.Model.extend({
    brewerName: DS.attr('string'),
    brewerTime: DS.attr('string'),
    voluntaryBrew: DS.attr('boolean'),
    declineRespsonsiblity: DS.attr('boolean')
});

export default RoundModel;
