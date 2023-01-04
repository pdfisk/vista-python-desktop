qx.Class.define('vista.ui.widgets.PythonEditor', {
    extend: qx.ui.container.Composite,

    construct: function () {
        this.base(arguments);
        this.addListenerOnce('appear', () => {
            this.onAppear();
        });
        this.addListener('resize', () => {
            this.onResize();
        });
    },

    properties: {
        deferredText: { init: null, nullable: true },
        editor: { init: null }
    },

    members: {

        getValue: function () {
            if (this.getEditor() == null)
                return '';
            return this.getEditor().getValue();
        },

        onAppear: function () {
            let div = this.getContentElement().getDomElement();
            let editor = window.ace.edit(div);
            editor.setTheme("ace/theme/textmate");
            editor.session.setMode("ace/mode/python");
            this.setEditor(editor);
            if (this.getDeferredText() != null) {
                this.getEditor().setValue(this.getDeferredText());
                this.setDeferredText(null);
                this.scrollToTop();
            }
        },

        onResize: function () {
            let editor = this.getEditor();
            if (editor)
                editor.resize();
        },

        revealLine: function (lineNo) {
            // this.getEditor().revealLine(lineNo);
        },

        revealLineInCenter: function (lineNo) {
            // this.getEditor().revealLineInCenter(lineNo);
        },

        scrollToTop: function () {
            this.getEditor().gotoLine(0);
        },

        setActiveLine: function (lineNo) {
            // this.getEditor().setPosition({ column: 1, lineNumber: lineNo });
        },

        setValue: function (text) {
            if (this.getEditor() == null) {
                this.setDeferredText(text);
                return;
            }
            this.getEditor().setValue(text);
            this.scrollToTop();
        }

    }

});
