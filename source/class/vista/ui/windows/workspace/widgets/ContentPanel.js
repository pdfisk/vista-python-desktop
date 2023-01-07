qx.Class.define('vista.ui.windows.workspace.widgets.ContentPanel',
    {
        extend: qx.ui.splitpane.Pane,

        construct: function () {
            this.base(arguments, 'vertical');
            this.initialize();
        },

        properties: {
            editor: { init: null },
            output: { init: null }
        },

        members:
        {

            changeOrientation: function () {
                if (this.getOrientation() == 'vertical')
                    this.setOrientation('horizontal');
                else
                    this.setOrientation('vertical');
            },

            changeOutput: function () {
                this.getOutput().changeSelection();
            },

            initialize: function () {
                this.setEditor(new vista.ui.widgets.PythonEditor());
                this.setOutput(new vista.ui.widgets.OutputPanel());
                this.add(this.getOutput(), 1);
                this.add(this.getEditor(), 1);
            }

        }

    });
