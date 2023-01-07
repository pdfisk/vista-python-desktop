qx.Class.define('vista.ui.widgets.containers.GridPanel',
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

            defaultSize: function () {
                return 3;
            },

            defaultSpacingX: function () {
                return 1;
            },

            defaultSpacingY: function () {
                return 1;
            },

            initialize: function () {
                const layout = new qx.ui.layout.Grid(this.defaultSpacingX(), this.defaultSpacingY());
                for (let i = 0; i < this.defaultSize(); i++) {
                    layout.setRowFlex(i, 1);
                    layout.setColumnFlex(i, 1);
                }
                this.setLayout(layout);
            }

        }

    });
