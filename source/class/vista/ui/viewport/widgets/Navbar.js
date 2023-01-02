qx.Class.define('vista.ui.viewport.widgets.Navbar',
    {
        extend: qx.ui.container.Composite,

        type: 'singleton',

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'navbar'
            },
        },

        members:
        {

            initialize: function () {
            }

        }

    });
