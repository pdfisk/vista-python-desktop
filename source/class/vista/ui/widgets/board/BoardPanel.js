qx.Class.define('vista.ui.widgets.board.BoardPanel',
    {
        extend: vista.ui.widgets.containers.GridPanel,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
        },

        members:
        {

            addTile: function (row, column) {
                const tile = this.defaultTile();
                tile.setHandler(this);
                tile.setRow(row);
                tile.setColumn(column);
                this.add(tile, { row: row, column: column });
            },

            addTiles: function () {
                this.removeAll();
                for (let row = 0; row < this.defaultSize(); row++) {
                    for (let column = 0; column < this.defaultSize(); column++)
                        this.addTile(row, column);
                }
            },

            defaultSize: function () {
                return 7;
            },

            defaultTile: function () {
                return new vista.ui.widgets.board.BoardTile();
            },

            initialize: function () {
                this.base(arguments);
                this.setBackgroundColor('#ccc');
                this.addListenerOnce('appear', () => { this.onAppear(); });
            },

            onAppear: function () {
                this.addTiles();
            },

            onTileClicked: function (tile) {
                console.log('onTileClicked', tile.getRow(), tile.getColumn());
                tile.toggle();
            }

        }

    });
