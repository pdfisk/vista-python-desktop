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
            },

            contentPanel: {
                init: null
            }

        },

        members:
        {

            addButtonBar: function () {
                this.setButtonBar(new vista.ui.windows.base.widgets.ButtonBar(this));
                this.add(this.getButtonBar(), { edge: 'south' });
                this.defaultButtonsLeft().forEach((label) => { this.getButtonBar().addButtonLeft(label); });
                this.defaultButtonsRight().forEach((label) => { this.getButtonBar().addButtonRight(label); });
            },

            addContent: function () {
                this.setContentPanel(this.defaultContent());
                this.add(this.getContentPanel(), { edge: 'center' });
            },

            defaultButtonsLeft: function () {
                return [];
            },

            defaultButtonsRight: function () {
                return [];
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

            defaultContent: function () {
                return new vista.ui.widgets.TranscriptPanel();
            },

            initialize: function () {
                this.setCaption(this.defaultCaption());
                this.setLayout(new qx.ui.layout.Dock());
                this.addContent();
                if (this.defaultHasButtonBar())
                    this.addButtonBar();
                this.addListener('appear', () => { this.onAppear(); });
                this.show();
            },

            onAppear: function () {
                if (this.defaultIsCentered())
                    this.center();
            },

            onButtonClicked: function (tag) {
                console.log('onButtonClicked', tag);
            }

        }

    });
