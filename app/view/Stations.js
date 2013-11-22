Ext.define("kitchenplayer-control.view.Stations", {
    extend: 'Ext.Container',
    requires: [

    ],
    xtype: 'stations',
    
    config: {
        layout: 'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Heimcontrol - Kitchen',
                items: [
                    {
                        xtype: 'button',
                        text: 'Play / Pause',
                        flex: 1
                    },
                ]
            },
            {
                type: 'vbox',
                layout: 'fit',
                items: [

                    {
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
                            Ext.Msg.alert('Switched to station:', record.get('name'));
                        },
                    }

                ]
            }
            
        ]
    }
});