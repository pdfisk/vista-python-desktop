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
qx.Theme.define("vista.theme.vista.Appearance",
    {
        extend: qx.theme.modern.Appearance,

        appearances:
        {

            navbar: {
                style(states) {
                    return {
                        backgroundColor: "navbar-background",
                        height: 45
                    };
                }
            },

            viewport: {
                style(states) {
                    return {
                        backgroundColor: "viewport-background"
                    };
                }
            }

        }

    });
