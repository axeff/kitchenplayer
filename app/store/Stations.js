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
                name: "Radio Eins",
                url: "http://www.radioeins.de/live.m3u"
            },
            {
                name: "Groove Salad",
                url: "http://somafm.com/groovesalad.pls",
                info: "Groove Salad: A nicely chilled plate of ambient/downtempo beats and grooves."
            },
            {
                name: "Dub Step Beyond",
                url: "http://somafm.com/dubstep.pls",
                info: "Dub Step Beyond: Dubstep, Dub and Deep Bass. May damage speakers at high volume."
            },
            {
                name: "Indie Pop Rocks!",
                url: "http://somafm.com/indiepop.pls",
                info: "Indie Pop Rocks!: New and classic favorite indie pop tracks."
            },
            {
                name: "Sonic Universe",
                url: "http://somafm.com/sonicuniverse192.pls",
                info: "Sonic Universe: Transcending the world of jazz with eclectic, avant-garde takes on tradition."
            },
            {
                name: "Digitalis",
                url: "http://somafm.com/digitalis.pls",
                info: "Digitalis: Digitally affected analog rock to calm the agitated heart."
            }
        ]
    }
});