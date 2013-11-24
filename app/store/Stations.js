Ext.define('kitchenplayer.store.Stations', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'kitchenplayer.model.Station',
        disableSelection: true,
        emptyText: '<p class="no-searches">Nothing found matching that search</p>',
        storeId: 'Stations',
        autoLoad: true,
        //setup the grouping functionality to group by the first letter of the firstName field
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        data: [
            {
                name: "FM4",
                url: "http://dummy.org/fm4"
            },
            {
                name: "FluxFM",
                url: "http://dummy.org/fluxfm"
            },
            {
                name: "Deutschlandradio",
                url: "http://dummy.org/deutschlandradio"
            }
        ]
    }
});