Ext.define('kitchenplayer.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    fullscreen: true,
    requires: [
        'kitchenplayer.view.Stations'
    ],
    
    config: {
        layout: 'fit',
        items: [
            {
                layout: 'fit',
                title: 'Control',
                iconCls: 'home',
                scrollable: true,
                xclass: 'kitchenplayer.view.Stations'
            },
            /*{
                title: 'Settings',
                iconCls: 'settings',
                xclass: 'kitchenplayer.view.Settings'
            }*/
        ]
    }
});
