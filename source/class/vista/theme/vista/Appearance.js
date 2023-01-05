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

            'vista-button': {
                include: 'button',
                style(states) {
                    return {
                    };
                }
            }

        }

    });
