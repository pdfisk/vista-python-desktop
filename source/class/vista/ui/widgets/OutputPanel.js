qx.Class.define('vista.ui.widgets.OutputPanel',
    {
        extend: qx.ui.container.Stack,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            board: {init: null},
            transcript: {init:null}
        },

        members:
        {

            initialize: function () {
                this.setBoard(new vista.ui.widgets.board.BoardPanel());
                this.setTranscript(new vista.ui.widgets.TranscriptPanel());
                this.add(this.getTranscript());
                this.add(this.getBoard());
            }

        }

    });
