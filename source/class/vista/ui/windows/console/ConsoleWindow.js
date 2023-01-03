qx.Class.define('vista.ui.windows.console.ConsoleWindow',
    {
        extend: qx.ui.window.Window,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'console-window'
            }
        },

        members:
        {

            initialize: function () {
                this.setCaption('Vista Python Console');
                this.addListener('appear', () => { this.onAppear(); });
                this.show();
            },

            onAppear: function () {
                this.center();
            }

        }

    });
