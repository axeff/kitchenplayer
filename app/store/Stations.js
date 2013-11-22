Ext.define('kitchenplayer-control.store.Stations', {
    extend: 'Ext.data.Store',
    config: {
        model: 'kitchenplayer-control.model.Station',
        storeId: 'Stations',
        autolod: true,
        //setup the grouping functionality to group by the first letter of the firstName field
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        data: [
            {
                name: "FM4"
            },
            {
                name: "FluxFM"
            },
            {
                name: "Deutschlandradio"
            }
        ]
    },
    
});