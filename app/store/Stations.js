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
                url: "http://mp3stream1.apasf.apa.at:8000/listen.pls"
            },
            {
                name: "FluxFM",
                url: "http://www.fluxfm.de:80/wp-content/themes/motorfm/fluxfm.pls"
            },
            {
                name: "Deutschlandradio Kultur",
                url: "http://www.deutschlandradio.de/streaming/dkultur.m3u"
            },
            {
                name: "Deutschlandfunk",
                url: "http://www.deutschlandradio.de/streaming/dkultur.m3u"
            },
            {
                name: "SWR3",
                url: "http://mp3-live.swr3.de/swr3_m.pls"
            }
        ]
    }
});