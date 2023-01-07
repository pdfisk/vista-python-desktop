qx.Class.define('vista.ui.windows.workspace.WorkspaceWindow',
    {
        extend: vista.ui.windows.base.BaseWindow,

        properties: {
            cin: { init: null },
            cout: { init: null }
        },

        members:
        {

            defaultButtonsLeft: function () {
                return ['Eval', 'Clear Out', 'Clear In']
            },

            defaultButtonsRight: function () {
                return ['Orientation', 'Panel']
            },

            defaultCaption: function () {
                return 'Vista Python Workspace';
            },

            defaultContent: function () {
                const contentPanel = new vista.ui.windows.workspace.widgets.ContentPanel();
                this.setCin(contentPanel.getEditor());
                this.setCout(contentPanel.getOutput().getTranscript());
                return contentPanel;
            },

            onButtonClicked: function (tag) {
                switch (tag) {
                    case 'clear_in':
                        this.onClearIn();
                        break;
                    case 'clear_out':
                        this.onClearOut();
                        break;
                    case 'eval':
                        this.onEval();
                        break;
                    case 'orientation':
                        this.onOrientation();
                        break;
                    default:
                        console.log('onButtonClicked', tag);
                        break;
                }
            },

            onClearIn: function () {
                this.getCin().clear();
            },

            onClearOut: function () {
                this.getCout().clear();

            },

            onEval: function () {
                const fn = (text) => {
                    this.getCout().pr(text);
                    this.getCout().scrollToEnd();
                };
                const src = this.getCin().getValue();
                vista.python.PythonApi.eval(src, fn);
            },

            onOrientation: function () {
                this.getContentPanel().toggleOrientation();
            }


        }

    });
