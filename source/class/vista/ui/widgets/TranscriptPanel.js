qx.Class.define('vista.ui.widgets.TranscriptPanel',
    {
        extend: qx.ui.form.TextArea,


        construct: function () {
            this.base(arguments);
            this.addListenerOnce('appear', () => {
                this._onAppear();
            });
        },

        properties: {
            appearance: {
                refine: true,
                init: 'transcript-panel'
            }
        },

        members:
        {

            _appeared: false,

            _deferredText: '',

            _onAppear: function () {
                this._appeared = true;
                this.setValue('');
                if (this._deferredText.length > 0) {
                    this.append(this._deferredText);
                    this._deferredText = null;
                }
            },

            clear: function () {
                this.setValue('');
            },

            append: function (text) {
                if (!this._appeared) {
                    this._deferredText += text;
                    return;
                }
                this.setValue(this.getValue() + text);
            },

            newline: function () {
                this.append('\n');
            },

            pr: function (text) {
                this.append(text);
            },

            prn: function (text) {
                this.append(text + '\n');
            }

        }

    });
