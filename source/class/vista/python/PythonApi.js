qx.Class.define('vista.python.PythonApi',
    {

        extend: qx.core.Object,

        type: 'singleton',

        members: {

            runScript: function (src, fn) {
                window['vista_run_script'](src, fn);
            },

            setConfig: function (name, value) {
                window['vista_set_value'](name, value);
            }

        }

    });
