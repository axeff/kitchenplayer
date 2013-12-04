Ext.define('kitchenplayer.controller.RadioController', {
    extend: 'Ext.app.Controller',
    requires: [
    ],
    config: {
        radio: false,
        refs: {
            playpause: "#playpause",
            stationsList: '#stationsList',
            volumeSlider: '#volumeSlider'
        },
        control: {
            playpause: {
                change: 'playpauseHandler'
            },
            stationsList: {
                radioStationSelected: 'radioStationSelectedHandler'
            },
            volumeSlider: {
                change: 'volumeSliderHandler'
            }
          
        }

    },
    
    launch: function(){
        this.setRadio(new Radio('192.168.1.2',1338, function(message){
            console.log(message);
            Ext.ComponentManager.get('titlebar').setTitle(message.station);
            Ext.ComponentManager.get('volumeSlider').setValue(message.volume);
            if (message.playpause) {
                this.togglePlaypause(message.playpause);
            }
        }.bind(this)));

    },
    togglePlaypause: function(value){
        var toggle = Ext.ComponentManager.get('playpause');
        toggle.setValue(value);
    },
    
    radioStationSelectedHandler: function(item){
        this.getRadio().playStation(item.get('name'), item.get('url'));
    },
    
    playpauseHandler: function(a,b,event, value){
        //prevent triggering event when value get's changed by websocket
        if (typeof event == "object"){
            this.getRadio().playpause(value);
        }
    },
    
    volumeSliderHandler: function(a,b,c, percentage){
        this.getRadio().volume(percentage);
    }
    
    
});


