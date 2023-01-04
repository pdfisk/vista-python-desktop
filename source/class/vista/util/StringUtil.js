qx.Class.define('vista.util.StringUtil',
    {

        statics: {

            asTag: function (text) {
                return text.toLowerCase().replaceAll(' ', '_');
            }

        }

    });
