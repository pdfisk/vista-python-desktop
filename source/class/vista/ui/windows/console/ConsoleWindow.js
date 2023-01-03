qx.Class.define('vista.ui.windows.console.ConsoleWindow',
    {
        extend: vista.ui.windows.base.BaseWindow,

        properties: {
        },

        members:
        {

            defaultButtons: function () {
                return ['Eval', 'Clear Out', 'Clear In']
            },

            defaultCaption: function () {
                return 'Vista Python Console';
            }

        }

    });
