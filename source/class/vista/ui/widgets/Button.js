qx.Class.define('vista.ui.widgets.Button', {
    extend: qx.ui.form.Button,

    construct: function (label) {
        this.base(arguments, label);
    },

    properties: {
        appearance: {
            refine: true,
            init: 'vista-button'
        }
    },

    members: {

    }

});
