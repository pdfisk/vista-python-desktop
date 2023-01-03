qx.Class.define('vista.ui.widgets.TranscriptPanel',
    {
        extend: qx.ui.form.TextArea,


        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'transcript-panel'
            }
        },

        members:
        {

            initialize: function () {
            }

        }

    });
