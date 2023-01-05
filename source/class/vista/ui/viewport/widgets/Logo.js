qx.Class.define('vista.ui.viewport.widgets.Logo',
    {
        extend: qx.ui.basic.Image,

        type: 'singleton',

        construct: function () {
            this.base(arguments, vista.constants.ViewportConstants.LOGO_SOURCE);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'navbar-logo'
            }
        },

        members:
        {

            initialize: function () {
                this.setHeight(vista.constants.ViewportConstants.LOGO_HEIGHT);
                this.setWidth(vista.constants.ViewportConstants.LOGO_WIDTH);
            }

        }

    });
