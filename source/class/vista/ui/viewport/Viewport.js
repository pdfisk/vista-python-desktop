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
            appearance: {
                refine: true,
                init: 'viewport'
            },
            root: { init: null }
        },

        members:
        {

            initialize: function () {
                this.getRoot().add(this, { top: 0, right: 0, bottom: 0, left: 0 });
                this.setLayout(new qx.ui.layout.Dock());
                this.add(vista.ui.viewport.widgets.NavBar.getInstance(), { edge: 'north' });
            }

        }

    });
