qx.Class.define('vista.ui.widgets.board.BoardTile',
    {
        extend: qx.ui.form.Button,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
        },

        members:
        {

            initialize: function () {
                this.base(arguments);
                this.setBackgroundColor('#ccc');
            }

        }

    });
