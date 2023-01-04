qx.Class.define('vista.Application',
    {
        extend: qx.application.Standalone,

        members:
        {

            main: function () {
                this.base(arguments);
                const root = this.getRoot();
                vista.ui.viewport.Viewport.getInstance().initialize(root);
                new vista.ui.windows.console.ConsoleWindow();
            }

        }
    });
