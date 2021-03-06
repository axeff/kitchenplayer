Ext.define("kitchenplayer.view.Stations", {
    extend: 'Ext.Container',
    requires: [
        'Ext.field.Search',
        'Ext.TitleBar',
        'Ext.field.Slider',
        'Ext.field.Toggle',
        'Ext.dataview.List'
    ],
    xtype: 'stations',

    config: {
        layout: 'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Heimcontrol - Kitchen',
                id: 'titlebar'
            },
            {
                xtype: 'titlebar',
                height: '4em',
                docked: 'bottom',
                padding: '0',
                margin: '0',
                items: [
                    {
                        id: 'volumeSlider',
                        xtype: 'sliderfield',
                        /*label: 'Volume',*/
                        value: 85,
                        minValue: 70,
                        maxValue: 100,
                        align: 'left',
                        padding: '0',
                        margin: '0'
                    },
                    {
                        id: 'playpause',
                        xtype: 'togglefield',
                        /*label: 'Play / Pause',*/
                        align: 'right',
                        value: 1,
                        padding: '0',
                        margin: '0'
                    }

                ]
            },
            {
                type: 'vbox',
                layout: 'fit',
                items: [
                    
                    {
                        id: 'stationsList',
                        flex: 2,
                        grouped: false,
                        xtype: 'list',
                        store: "Stations",
                        itemTpl: "<div>{name}</div>",
                        disclosure: true,
                        listeners: {
                            itemtap: function(a,b,c,record){
                                Ext.Msg.alert(record.get('name'),record.get('info'));
                            }
                        },
                        onItemDisclosure: function(record, item, index, e) {
                            e.stopEvent();
                            this.fireEvent('radioStationSelected', record);
                            
                        }
                    }

                ]
            }
            
        ]
    }
});