qx.Class.define('vista.ui.viewport.Viewport',
    {
        extend: qx.ui.container.Composite,

        statics: {

            getInstance: function (root) {
                if (!this.instance)
                    this.instance = new vista.ui.viewport.Viewport(root);
                return this.instance;
            },

            instance: null
        },

        construct: function (root) {
            this.base(arguments);
            this.setRoot(root);
            this.initialize();
        },

        properties: {
            root: { init: null }
        },

        members:
        {

            initialize: function () {
                this.getRoot().add(this, { top: 0, right: 0, bottom: 0, left: 0 });
                this.setBackgroundColor(this._getViewportBackgroundColor());
            },

            _getViewportBackgroundColor: function () {
                return vista.util.ThemeUtil.getColor(vista.constants.Color.VIEWPORT_BACKGROUND);
            }

        }
    });
