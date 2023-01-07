qx.Class.define('vista.ui.widgets.board.BoardPanel',
    {
        extend: qx.ui.container.Composite,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
        },

        members:
        {

            initialize: function () {
                this.setBackgroundColor('red');
            }

        }

    });
