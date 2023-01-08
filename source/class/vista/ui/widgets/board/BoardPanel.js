qx.Class.define('vista.ui.widgets.board.BoardPanel',
    {
        extend: vista.ui.widgets.containers.GridPanel,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            tiles: { init: {} }
        },

        members:
        {

            addTile: function (row, column) {
                const tile = this.defaultTile();
                this.getTiles()[this.getTileKey(row, column)] = tile;
                tile.setHandler(this);
                tile.setRow(row);
                tile.setColumn(column);
                this.add(tile, { row: row, column: column });
            },

            addTiles: function () {
                this.setTiles({});
                this.removeAll();
                for (let row = 0; row < this.defaultSize(); row++) {
                    for (let column = 0; column < this.defaultSize(); column++)
                        this.addTile(row, column);
                }
            },

            clear: function () {
                Object.values(this.getTiles()).forEach((tile) => { tile.clear(); });
            },

            defaultSize: function () {
                return 7;
            },

            defaultTile: function () {
                return new vista.ui.widgets.board.BoardTile();
            },

            getTileKey: function (row, column) {
                return `r${row}-c${column}`;
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
