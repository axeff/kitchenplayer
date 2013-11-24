Ext.define('kitchenplayer.model.Station', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.identifier.Uuid'
    ],
    config: {
        identifier: 'uuid',
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'url',  type: 'string'},
        ],
            validations: [
            {type: 'presence',  field: 'name'},
            {type: 'presence',  field: 'url'}
        ]
    }
});