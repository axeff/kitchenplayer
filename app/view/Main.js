Ext.define('kitchenplayer-control.view.Main', {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'main',
    fullscreen: true,
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'kitchenplayer-control.model.Station',
        'kitchenplayer-control.view.Stations',
        'Ext.dataview.List',
        'kitchenplayer-control.view.Settings'
    ],
    
    config: {
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',

        /**
         *  Container must be dragged 10 pixels horizontally before allowing
         *  the underlying container to actually be dragged.
         *
         *  @since 0.2.2
         */
        containerSlideDelay: 10,

        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },

        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 400,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'dark',
                items: [
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        width: '100%',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Play / Pause',
                                align: 'left',
                            },
                            {
                                xtype: 'searchfield',
                                placeholder: 'Search',
                                name: 'searchfield',
                                align: 'right',
                            },
                            {
                                xtype: 'sliderfield',
                                label: 'Volume',
                                value: 50,
                                minValue: 0,
                                maxValue: 100
                            }
                        ]
                    }
                ]

            }]

        },
        cls: 'menuList',
        tabBarPosition: 'bottom',
        items: [
            {
                layout: 'fit',
                title: 'Control',
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
