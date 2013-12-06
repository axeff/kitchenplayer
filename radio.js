var Sound = require('simple-mplayer');
var exec = require('child_process').exec;


module.exports = function() {
    
    var mplayer = false, url, playpause;

    return {
        setPlaypause: function(playpause) {
            this.playpause = playpause;

            if (this.mplayer){
                this.mplayer.stop();
            }

            if (this.playpause && this.url){

                this.mplayer = new Sound('');
                this.mplayer.play({loop:0,playlist:this.url});
            }
        }.bind(this),

        getPlaypause: function(){
            return this.playpause;
        }.bind(this),

        stream: function(options){
            console.log(options);
            this.name = options.name;
            this.url = options.url;

            if (this.mplayer){
                this.mplayer.stop();
            }

            this.mplayer = new Sound('');
            this.mplayer.play({loop:0,playlist:this.url});

        }.bind(this),

        getStation: function(){
            return this.name;
        }.bind(this),

        setVolume: function(volume){
            this.volume = volume.toString();

            exec('amixer sset PCM ' + this.volume + '%');
        }.bind(this),

        getVolume: function(){
            if (!this.volume){
                exec('amixer get PCM | egrep -o "[0-9]+%"', function (error, stdout, stderr) {

                    this.volume = stdout.slice(0, -2);

                }.bind(this));

            }
            return this.volume;
        }.bind(this)
    };
}