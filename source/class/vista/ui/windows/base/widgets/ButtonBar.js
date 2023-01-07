qx.Class.define('vista.ui.windows.base.widgets.ButtonBar',
    {
        extend: vista.ui.widgets.containers.HPanel,


        construct: function (window) {
            this.base(arguments);
            this.setWindow(window);
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
                const button = new vista.ui.widgets.Button(label);
                const tag = vista.util.StringUtil.asTag(label);
                this.add(button);
                button.addListener('click', () => { this.getWindow().onButtonClicked(tag); });
            },

            defaultSpacing: function () {
                return vista.constants.WindowConstants.BUTTONBAR_SPACING;
            }

        }

    });
