qx.Class.define('vista.ui.windows.console.widgets.SplitPanel',
    {
        extend: qx.ui.splitpane.Pane,

        construct: function () {
            this.base(arguments, 'vertical');
            this.initialize();
        },

        properties: {
            cin: { init: null },
            cout: { init: null }
        },

        members:
        {

            initialize: function () {
                this.setCin(new vista.ui.widgets.PythonEditor());
                this.setCout(new vista.ui.widgets.TranscriptPanel());
                this.add(this.getCout(), 1);
                this.add(this.getCin(), 1);
            }

        }

    });
