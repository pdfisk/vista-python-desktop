qx.Class.define("vista.Application",
    {
        extend: qx.application.Standalone,

        members:
        {

            main: function () {
                this.base(arguments);
                const root = this.getRoot();
                const viewport = vista.ui.viewport.Viewport.getInstance(root);
                console.log(viewport.getAppearance());
                const window = new qx.ui.window.Window;
                window.setCaption('Vista Python Console');
                window.setWidth(525);
                window.setHeight(475);
                window.addListener('appear', () => { this.onAppear(window); });
                window.show();
            },

            onAppear: function (window) {
                window.center();
            }

        }
    });
