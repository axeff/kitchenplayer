Ext.define("kitchenplayer.view.Stations", {
    extend: 'Ext.Container',
    requires: [
        'Ext.field.Search'
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
                type: 'vbox',
                layout: 'fit',
                items: [
                    
                    {
                        id: 'stationsList',
                        flex: 2,
                        grouped: true,
                        xtype: 'list',
                        store: "Stations",
                        itemTpl: "<div>{name}</div>",
                        disclosure: true,
                        onItemDisclosure: function(record, item, index, e) {
                            e.stopEvent();
                            //ToDo: Send nodejs command to play station
                            // ...
                            
                            this.fireEvent('radioStationSelected', record);
                            
                        },
                    }

                ]
            }
            
        ]
    }
});