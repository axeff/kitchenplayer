Ext.define("kitchenplayer.view.Settings", {
    extend: 'Ext.Container',
    requires: [
        'Ext.form.FieldSet'
    ],
    xtype: 'settings',
    
    config: {
        layout: 'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [

                    {
                        flex: 2,
                        title: "Einstellungen",
                        xtype: "titlebar",
                    },

                ]
            },
            {
                xtype: 'container',
                flex: 2,
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            xtype: 'textfield'
                        },
                        items: [
                            {
                                name: 'host',
                                label: 'Host IP Address',
                                value: '192.168.1.22'
                            },
                            {
                                name: 'api',
                                label: 'Shoutcast API',
                                value: 'http://shoutcast.winamp.com'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});