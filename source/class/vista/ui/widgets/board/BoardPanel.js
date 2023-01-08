qx.Class.define('vista.ui.widgets.board.BoardPanel',
    {
        extend: vista.ui.widgets.containers.GridPanel,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            tileMap: { init: {} }
        },

        members:
        {

            addTile: function (row, column, tileSize, iconSize) {
                const tile = this.defaultTile();
                tile.setWidth(tileSize.width);
                tile.setHeight(tileSize.height);
                tile.setIconSize(iconSize);
                this.getTileMap()[this.getTileKey(row, column)] = tile;
                tile.setHandler(this);
                tile.setPanel(this);
                tile.setRow(row);
                tile.setColumn(column);
                this.add(tile, { row: row, column: column });
                return tile;
            },

            addTiles: function () {
                this.setTileMap({});
                this.removeAll();
                const tileSize = this.getTileSize();
                const iconSize = parseInt(Math.min(tileSize.width, tileSize.height) * 0.75);
                for (let row = 0; row < this.defaultSize(); row++) {
                    for (let column = 0; column < this.defaultSize(); column++)
                        this.addTile(row, column, tileSize, iconSize);
                }
            },

            clear: function () {
                this.getTiles().forEach((tile) => { tile.clear(); });
            },

            defaultSize: function () {
                return 7;
            },

            defaultTile: function () {
                return new vista.ui.widgets.board.BoardTile();
            },

            getClientSize: function () {
                const clientRect = this.getContentElement().getDomElement().getBoundingClientRect();
                return { height: clientRect.height, width: clientRect.width };
            },

            getTile: function (row, column) {
                return this.getTileMap()[this.getTileKey(row, column)];
            },

            getTileKey: function (row, column) {
                return `r${row}-c${column}`;
            },

            getTiles: function () {
                return Object.values(this.getTileMap());
            },

            getTileSize: function () {
                const clientSize = this.getClientSize();
                const height = clientSize.height - this.defaultSize() * 1 - 2;
                const width = clientSize.width - this.defaultSize() * 1 - 2;
                const tileHeight = parseInt(height / this.defaultSize());
                const tileWidth = parseInt(width / this.defaultSize());
                return { height: tileHeight, width: tileWidth };
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
