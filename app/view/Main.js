Ext.define('kitchenplayer-control.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'kitchenplayer-control.model.Station',
        'kitchenplayer-control.view.Stations',
        'Ext.dataview.List',
        'kitchenplayer-control.view.Settings'
    ],
    
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                layout: 'fit',
                title: 'Welcome',
                iconCls: 'home',
                scrollable: true,
                xclass: 'kitchenplayer-control.view.Stations'
            },
            {
                title: 'Settings',
                iconCls: 'settings',
                xclass: 'kitchenplayer-control.view.Settings'
            }
        ]
    }
});
