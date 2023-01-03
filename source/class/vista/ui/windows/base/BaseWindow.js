qx.Class.define('vista.ui.windows.base.BaseWindow',
    {
        extend: qx.ui.window.Window,

        construct: function () {
            this.base(arguments);
            this.initialize();
        },

        properties: {
            appearance: {
                refine: true,
                init: 'base-window'
            }
        },

        members:
        {

            defaultCaption: function () {
                return 'a Window';
            },

            defaultIsCentered: function () {
                return true;
            },

            initialize: function () {
                this.setCaption(this.defaultCaption());
                this.addListener('appear', () => { this.onAppear(); });
                this.show();
            },

            onAppear: function () {
                if (this.defaultIsCentered())
                    this.center();
            }

        }

    });
