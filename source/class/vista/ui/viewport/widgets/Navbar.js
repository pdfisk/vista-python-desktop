qx.Class.define('vista.ui.viewport.widgets.NavBar',
    {
        extend: vista.ui.widgets.containers.DockPanel,

        type: 'singleton',

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'navbar'
            }
        },

        members:
        {

            initialize: function () {
                this.base(arguments);
                const logo = vista.ui.viewport.widgets.Logo.getInstance();
                this.addWest(logo);
            }

        }

    });
