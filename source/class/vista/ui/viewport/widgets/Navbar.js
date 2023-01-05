qx.Class.define('vista.ui.viewport.widgets.NavBar',
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
            }
        },

        members:
        {

            initialize: function () {
                this.setLayout(new qx.ui.layout.Dock());
                const logo = vista.ui.viewport.widgets.Logo.getInstance();
                this.add(logo, { edge: 'west' });
            }

        }

    });
