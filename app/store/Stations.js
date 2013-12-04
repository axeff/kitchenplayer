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
                url: " http://www.fluxfm.de/stream-berlin"
            },
            {
                name: "Deutschlandfunk",
                url: "http://www.dradio.de/streaming/dradio_ogg.pls"
            },
            {
                name: "SWR3",
                url: "http://mp3-live.swr3.de/swr3_m.pls"
            },
            {
                name: "JazzRadio 101.9",
                url: "http://www.jazzradio.net/docs/stream/jazzradio.pls"
            },
            {
                name: "K&ouml;ln Campus Radio",
                url: "http://koelncampus.uni-koeln.de:7999/listen.pls"
            },
            {
                name: "MDR Figaro",
                url: "http://avw.mdr.de/livestreams/mdr_figaro_live_128.m3u"
            },
            {
                name: "RauteMusik #Metal",
                url: "http://metal-high.rautemusik.fm/listen.pls"
            },
            {
                name: "RauteMusik #Elektro",
                url: "http://house-high.rautemusik.fm/listen.pls"
            },
            {
                name: "RauteMusik #DubStep",
                url: "http://drumstep-high.rautemusik.fm/listen.pls"
            },
            {
                name: "Radio Eins",
                url: "http://www.radioeins.de/live.m3u"
            }
        ]
    }
});