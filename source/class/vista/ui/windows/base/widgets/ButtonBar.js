qx.Class.define('vista.ui.windows.base.widgets.ButtonBar',
    {
        extend: qx.ui.container.Composite,


        construct: function (window) {
            this.base(arguments);
            this.setWindow(window);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'buttonbar'
            },
            window: {
                init: null
            }
        },

        members:
        {

            addButton: function (label) {
                const button = new qx.ui.form.Button(label);
                const tag = vista.util.StringUtil.asTag(label);
                this.add(button);
                button.addListener('click', () => { this.getWindow().onButtonClicked(tag); });
            },

            initialize: function () {
                const layout = new qx.ui.layout.HBox();
                layout.setSpacing(vista.constants.WindowConstants.BUTTONBAR_SPACING);
                this.setLayout(layout);
            }

        }

    });
