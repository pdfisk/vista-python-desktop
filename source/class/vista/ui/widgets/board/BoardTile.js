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
            iconSize: { init: 25 },
            panel: { init: null },
            row: { init: 0 }
        },

        members:
        {

            clear: function () {
                this.setIcon(null);
                this.setLabel(null);
                this._removeAll();
            },

            getIconImage: function () {
                return this._getCreatedChildControls().icon;
            },

            initialize: function () {
                this.addListener('execute', () => { this.onExecute(); });
            },

            onExecute: function () {
                this.getHandler().onTileClicked(this);
            },

            onImageLoaded: function () {
                if (this.getIconImage())
                    this.getIconImage().setDomLeft(10);
            },

            showIcon: function (icon) {
                this.setIcon(`images/animals/${icon}.png`);
                this.showIconImage();
            },

            showIconImage: function () {
                this._removeAll();
                this._add(this.getIconImage());
            },

            toggle: function () {
                if (this.getIcon())
                    this.clear();
                else
                    this.showIcon('chick_right');
                //    if (this.getLabel().length == 0)
                //        this.setLabel('X');
                //    else
                //        this.setLabel('');
            },

            _createChildControlImpl(id) {
                if (id == 'icon') {
                    const image = new qx.ui.basic.Image(this.getIcon());
                    image.setScale(true);
                    image.setWidth(this.getIconSize());
                    image.setHeight(this.getIconSize());
                    this._add(image);
                    image.addListenerOnce('loaded', () => { this.onImageLoaded(); });
                    return image;
                }
                return super._createChildControlImpl(id);
            }

        }

    });
