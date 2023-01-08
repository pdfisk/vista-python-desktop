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
            iconImage: { init: null },
            iconSize: { init: 25 },
            panel: { init: null },
            row: { init: 0 }
        },

        members:
        {

            clear: function () {
                this.setIcon(null);
                this.setLabel(null);
            },

            initialize: function () {
                this.addListener('execute', () => { this.onExecute(); });
            },

            onExecute: function () {
                this.getHandler().onTileClicked(this);
            },

            showChick: function () {
                this.setIcon('images/animals/chick_right.png');
            },

            toggle: function () {
                this.showChick();
                //    if (this.getLabel().length == 0)
                //        this.setLabel('X');
                //    else
                //        this.setLabel('');
            },

            _createChildControlImpl(id) {
                if (id == 'icon') {
                    const control = new qx.ui.basic.Image(this.getIcon());
                    control.setScale(true);
                    control.setWidth(this.getIconSize());
                    control.setHeight(this.getIconSize());
                    this.setIconImage(control);
                    this._add(control);
                    control.addListenerOnce('appear', () => { control.setDomLeft(10); });
                    return control;
                }
                return super._createChildControlImpl(id);
            }

        }

    });
