qx.Class.define('vista.ui.windows.base.widgets.ButtonBar',
    {
        extend: qx.ui.container.Composite,


        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'buttonbar'
            },
        },

        members:
        {

            initialize: function () {
                this.setLayout(new qx.ui.layout.HBox());
                this.add(new qx.ui.form.Button('Hello'));
            }

        }

    });
