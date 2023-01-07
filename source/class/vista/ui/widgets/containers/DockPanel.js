qx.Class.define('vista.ui.widgets.containers.DockPanel',
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

            addEast: function (widget) {
                this.add(widget, { edge: 'east' });
            },

            addNorth: function (widget) {
                this.add(widget, { edge: 'north' });
            },

            addSouth: function (widget) {
                this.add(widget, { edge: 'south' });
            },

            addWest: function (widget) {
                this.add(widget, { edge: 'west' });
            },

            initialize: function () {
               this.setLayout(new qx.ui.layout.Dock());
            }

        }

    });
