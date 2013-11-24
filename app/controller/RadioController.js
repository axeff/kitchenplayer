Ext.define('kitchenplayer.controller.RadioController', {
    extend: 'Ext.app.Controller',
    requires: [

    ],
    config: {
        /**
         * @private
         */
        viewCache: [],
        refs: {
            playpause: "#playpause",
            stationsList: '#stationsList',
            volumeSlider: '#volumeSlider'
        },
        control: {
            playpause: {
                tap: 'playpauseHandler'
            },
            stationsList: {
                radioStationSelected: 'radioStationSelectedHandler'
            },
            volumeSlider: {
                change: 'volumeSliderHandler'
            }
          
        }

    },
    
    radioStationSelectedHandler: function(item){
        window.Radio.playStation(item.get('name'), item.get('url'));
    },
    
    playpauseHandler: function(){
        window.Radio.playpause();
    },
    
    volumeSliderHandler: function(a,b,c, percentage){
        window.Radio.volume(percentage);
    }
    
    
});


