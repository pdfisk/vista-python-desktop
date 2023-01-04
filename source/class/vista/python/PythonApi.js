qx.Class.define('vista.python.PythonApi',
    {

        extend: qx.core.Object,

        type: 'singleton',

        statics: {

            eval: function (src, fn) {
                try {
                    this.getInstance().runScript(src, fn);
                    return true;
                } catch (e) {
                    return 'Python error';
                }
            }

        },

        members: {

            runScript: function (src, fn) {
                window['vista_run_script'](src, fn);
            }

        }

    });
