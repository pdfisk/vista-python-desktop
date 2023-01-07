qx.Class.define('vista.ui.widgets.OutputPanel',
    {
        extend: qx.ui.container.Stack,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            board: { init: null },
            transcript: { init: null }
        },

        members:
        {

            changeSelection: function () {
                const selection = this.getSelection()[0];
                if (selection == this.getTranscript())
                    this.setSelection([this.getBoard()]);
                else
                    this.setSelection([this.getTranscript()]);
            },

            initialize: function () {
                this.setBoard(new vista.ui.widgets.board.BoardPanel());
                this.setTranscript(new vista.ui.widgets.TranscriptPanel());
                this.add(this.getTranscript());
                this.add(this.getBoard());
            }

        }

    });
