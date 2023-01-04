qx.Class.define('vista.ui.viewport.Viewport',
    {
        extend: qx.ui.container.Composite,

        type: 'singleton',

        properties: {
            appearance: {
                refine: true,
                init: 'viewport'
            },
            root: { init: null }
        },

        members:
        {

            initialize: function (root) {
                this.setRoot(root);
                this.getRoot().add(this, { top: 0, right: 0, bottom: 0, left: 0 });
                this.setLayout(new qx.ui.layout.Dock());
                this.add(vista.ui.viewport.widgets.NavBar.getInstance(), { edge: 'north' });
            }

        }

    });
