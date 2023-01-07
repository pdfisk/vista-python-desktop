qx.Class.define('vista.ui.windows.base.widgets.ButtonBar',
    {
        extend: vista.ui.widgets.containers.DockPanel,


        construct: function (window) {
            this.base(arguments);
            this.setWindow(window);
            this.addPanels();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'buttonbar'
            },
            leftButtons: {
                init: null
            },
            rightButtons: {
                init: null
            },
            window: {
                init: null
            }
        },

        members:
        {

            addButton: function (label, panel) {
                const button = new vista.ui.widgets.Button(label);
                const tag = vista.util.StringUtil.asTag(label);
                panel.add(button);
                button.addListener('click', () => { this.getWindow().onButtonClicked(tag); });
            },

            addButtonLeft(label) {
                this.addButton(label, this.getLeftButtons());
            },

            addButtonRight(label) {
                this.addButton(label, this.getRightButtons());
            },

            addPanels: function () {
                this.setLeftButtons(new vista.ui.windows.base.widgets.ButtonsPanel(this.getWindow()))
                this.setRightButtons(new vista.ui.windows.base.widgets.ButtonsPanel(this.getWindow()))
                this.addWest(this.getLeftButtons());
                this.addEast(this.getRightButtons());
            }

        }

    });
