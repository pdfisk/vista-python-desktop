/**
 * The vista appearance theme.
 *
 * @asset(qx/iconfont/MaterialIcons/materialicons-v126.eot)
 * @asset(qx/iconfont/MaterialIcons/materialicons-v126.woff2)
 * @asset(qx/iconfont/MaterialIcons/materialicons-v126.woff)
 * @asset(qx/iconfont/MaterialIcons/materialicons-v126.otf)
 * 
 * @asset(qx/iconfont/MaterialIcons/materialiconsoutlined-v101.eot)
 * @asset(qx/iconfont/MaterialIcons/materialiconsoutlined-v101.woff2)
 * @asset(qx/iconfont/MaterialIcons/materialiconsoutlined-v101.woff)
 * @asset(qx/iconfont/MaterialIcons/materialiconsoutlined-v101.otf)
 * 
 * @asset(qx/iconfont/MaterialIcons/materialiconsround-v100.eot)
 * @asset(qx/iconfont/MaterialIcons/materialiconsround-v100.woff2)
 * @asset(qx/iconfont/MaterialIcons/materialiconsround-v100.woff)
 * @asset(qx/iconfont/MaterialIcons/materialiconsround-v100.otf)
 * 
 * @asset(qx/iconfont/MaterialIcons/materialiconssharp-v101.eot)
 * @asset(qx/iconfont/MaterialIcons/materialiconssharp-v101.woff2)
 * @asset(qx/iconfont/MaterialIcons/materialiconssharp-v101.woff)
 * @asset(qx/iconfont/MaterialIcons/materialiconssharp-v101.otf)
 * 
 * @asset(qx/iconfont/MaterialIcons/materialiconstwotone-v104.eot)
 * @asset(qx/iconfont/MaterialIcons/materialiconstwotone-v104.woff2)
 * @asset(qx/iconfont/MaterialIcons/materialiconstwotone-v104.woff)
 * @asset(qx/iconfont/MaterialIcons/materialiconstwotone-v104.otf)
 * 
 */
qx.Theme.define('vista.theme.vista.Appearance',
    {
        extend: qx.theme.modern.Appearance,

        appearances:
        {

            'base-window': {
                alias: 'window',
                style(states) {
                    return {
                        height: parseInt(qx.bom.Viewport.getHeight() * vista.constants.WindowConstants.PERCENT_HEIGHT),
                        width: parseInt(qx.bom.Viewport.getWidth() * vista.constants.WindowConstants.PERCENT_WIDTH)
                    };
                }
            },

            buttonbar: {
                style(states) {
                    return {
                        backgroundColor: 'buttonbar-background',
                        padding: [1, 7, 2]
                    };
                }
            },

            navbar: {
                style(states) {
                    return {
                        backgroundColor: 'navbar-background',
                        height: 45
                    };
                }
            },

            'navbar-logo': {
                include: 'image',
                style(states) {
                    return {
                        marginLeft: 7,
                        marginTop: 2
                    };
                }
            },

            'transcript-panel': {
                include: 'textarea',
                style(states) {
                    return {
                        font: 'monospace',
                        padding: 4
                    };
                }
            },

            viewport: {
                style(states) {
                    return {
                        backgroundColor: 'viewport-background'
                    };
                }
            },


            'vista-button-frame': {
                alias: 'atom',

                style(states) {
                    var decorator, textColor;
                    var padding = [3, 9]; // default padding

                    if (states.checked && states.focused && !states.inner) {
                        decorator = 'vista-button-checked-focused';
                        textColor = undefined;
                        padding = [1, 7];
                    } else if (states.disabled) {
                        decorator = 'vista-button-disabled';
                        textColor = undefined;
                    } else if (states.pressed) {
                        decorator = 'vista-button-pressed';
                        textColor = 'text-hovered';
                    } else if (states.checked) {
                        decorator = 'vista-button-checked';
                        textColor = undefined;
                    } else if (states.hovered) {
                        decorator = 'vista-button-hovered';
                        textColor = 'text-hovered';
                    } else if (states.focused && !states.inner) {
                        decorator = 'vista-button-focused';
                        textColor = undefined;
                        padding = [1, 7];
                    } else {
                        decorator = 'vista-button';
                        textColor = undefined;
                    }

                    if (states.invalid && !states.disabled) {
                        decorator += '-invalid';
                    }

                    return {
                        decorator: decorator,
                        textColor: textColor,
                        padding: padding,
                        margin: [1, 0]
                    };
                }
            },

            'vista-button-frame/image': {
                style(states) {
                    return {
                        opacity: !states.replacement && states.disabled ? 0.5 : 1
                    };
                }
            },

            'vista-button': {
                alias: 'vista-button-frame',
                include: 'vista-button-frame',

                style(states) {
                    return {
                        center: true
                    };
                }
            },

            'toggle-vista-button': 'vista-button',

            'hover-vista-button': {
                alias: 'atom',
                include: 'atom',

                style(states) {
                    var decorator = states.hovered ? 'selected' : undefined;
                    return {
                        decorator: decorator,
                        textColor: states.hovered ? 'text-selected' : undefined
                    };
                }
            },

            menubutton: {
                include: 'vista-button',
                alias: 'vista-button',

                style(states) {
                    return {
                        icon: 'decoration/arrows/down.png',
                        iconPosition: 'right'
                    };
                }
            },

            splitbutton: {},
            'splitbutton/vista-button': 'vista-button',
            'splitbutton/arrow': {
                alias: 'vista-button',
                include: 'vista-button',

                style(states, superStyles) {
                    return {
                        icon: 'decoration/arrows/down.png',
                        padding: [superStyles.padding[0], superStyles.padding[1] - 6],
                        marginLeft: 1
                    };
                }
            }

        }

    });
