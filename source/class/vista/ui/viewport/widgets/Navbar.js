qx.Class.define('vista.ui.viewport.widgets.Navbar',
    {
        extend: qx.ui.container.Composite,

        type: 'singleton',

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
        },

        members:
        {

            initialize: function () {
                this.setBackgroundColor(this._getNavbarBackgroundColor());
                this.setHeight(vista.constants.Appearance.NAVBAR_HEIGHT);
            },

            _getNavbarBackgroundColor: function () {
                return vista.util.ThemeUtil.getColor(vista.constants.Color.NAVBAR_BACKGROUND);
            }

        }

    });
