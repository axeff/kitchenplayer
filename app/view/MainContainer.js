Ext.define("kitchenplayer.view.MainContainer", {
    extend: 'Ext.Container',
    requires: [
        "Ext.TitleBar"
    ],
    fullscreen: true,
    xtype: 'mainContainer',
    config: {
        layout: 'card',
           items: [
                {
                    docked: 'bottom',
                    xtype: 'titlebar',
                    layout: 'hbox',
                    flex: 1,
                    items: [
                        {
                            layout: 'fit',
                            xclass: 'kitchenplayer.view.Stations',
                            title: 'Stations',
                            iconCls: 'home',
                            scrollable: true,
                        },
                        {   
                            xclass: 'kitchenplayer.view.Settings',
                            title: 'Settings',
                            iconCls: 'settings',
                        }
                    ]
                     
                }
        ]
    }
});