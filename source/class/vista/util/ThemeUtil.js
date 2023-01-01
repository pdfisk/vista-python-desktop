qx.Class.define('vista.util.ThemeUtil',
    {

        statics: {

            getColor: function (name) {
                return this._getColorMap()[name];
            },

            _getColorMap: function () {
                return this._getColorTheme()._getDynamic();
            },

            _getColorTheme: function () {
                return qx.theme.manager.Color.getInstance();
            }

        }

    });
