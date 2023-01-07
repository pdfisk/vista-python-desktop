qx.Class.define('vista.ui.widgets.containers.HPanel',
    {
        extend: qx.ui.container.Composite,


        construct: function (window) {
            this.base(arguments);
            this.initialize();
        },

        properties: {
        },

        members:
        {

            defaultSpacing: function () {
                return 0;
            },

            initialize: function () {
                const layout = new qx.ui.layout.HBox();
                layout.setSpacing(this.defaultSpacing());
                this.setLayout(layout);
            }

        }

    });
