qx.Class.define('vista.ui.widgets.board.BoardTile',
    {
        extend: qx.ui.form.Button,

        construct: function () {
            this.base(arguments, '');
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'board-tile'
            },
            column: { init: 0 },
            handler: { init: null },
            row: { init: 0 }
        },

        members:
        {

            initialize: function () {
                this.addListener('execute', () => { this.onExecute(); });
            },

            onExecute: function () {
                this.getHandler().onTileClicked(this);
            },

            toggle: function () {
                if (this.getLabel().length == 0)
                    this.setLabel('X');
                else
                    this.setLabel('');
            }

        }

    });
