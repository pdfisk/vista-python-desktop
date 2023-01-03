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
            },

            buttonBar: {
                init: null
            }

        },

        members:
        {

            addButtonBar: function () {
                this.setButtonBar(new vista.ui.windows.base.widgets.ButtonBar());
                this.add(this.getButtonBar(), { edge: 'south' });
            },

            defaultCaption: function () {
                return 'a Window';
            },

            defaultHasButtonBar: function () {
                return true;
            },

            defaultIsCentered: function () {
                return true;
            },

            initialize: function () {
                this.setCaption(this.defaultCaption());
                this.setLayout(new qx.ui.layout.Dock());
                if (this.defaultHasButtonBar())
                    this.addButtonBar();
                this.addListener('appear', () => { this.onAppear(); });
                this.show();
            },

            onAppear: function () {
                if (this.defaultIsCentered())
                    this.center();
            }

        }

    });
