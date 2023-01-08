qx.Theme.define('vista.theme.vista.Decoration',
    {
        extend: qx.theme.modern.Decoration,

        decorations:
        {

            'board-tile': {
                style: {
                    radius: 3,
                    color: 'vista-button-border',
                    width: 1,
                    startColor: 'board-tile-start',
                    endColor: 'board-tile-end',
                    startColorPosition: 35,
                    endColorPosition: 100
                }
            },

            'vista-button': {
                style: {
                    radius: 9,
                    color: 'vista-button-border',
                    width: 1,
                    startColor: 'vista-button-start',
                    endColor: 'vista-button-end',
                    startColorPosition: 35,
                    endColorPosition: 100
                }
            },

            'vista-button-disabled': {
                include: 'vista-button',
                style: {
                    color: 'vista-button-border-disabled',
                    startColor: 'vista-button-disabled-start',
                    endColor: 'vista-button-disabled-end'
                }
            },

            'vista-button-hovered': {
                include: 'vista-button',
                style: {
                    startColor: 'vista-button-hovered-start',
                    endColor: 'vista-button-hovered-end'
                }
            },

            'vista-button-checked': {
                include: 'vista-button',
                style: {
                    endColor: 'vista-button-start',
                    startColor: 'vista-button-end'
                }
            },

            'vista-button-pressed': {
                include: 'vista-button',
                style: {
                    endColor: 'vista-button-hovered-start',
                    startColor: 'vista-button-hovered-end'
                }
            },

            'vista-button-focused': {
                style: {
                    radius: 9,
                    color: 'vista-button-border',
                    width: 1,
                    innerColor: 'vista-button-focused',
                    innerWidth: 2,
                    startColor: 'vista-button-start',
                    endColor: 'vista-button-end',
                    startColorPosition: 30,
                    endColorPosition: 100
                }
            },

            'vista-button-checked-focused': {
                include: 'vista-button-focused',
                style: {
                    endColor: 'vista-button-start',
                    startColor: 'vista-button-end'
                }
            },

            // invalid
            'vista-button-invalid': {
                include: 'vista-button',
                style: {
                    color: 'border-invalid'
                }
            },

            'vista-button-disabled-invalid': {
                include: 'vista-button-disabled',
                style: {
                    color: 'border-invalid'
                }
            },

            'vista-button-hovered-invalid': {
                include: 'vista-button-hovered',
                style: {
                    color: 'border-invalid'
                }
            },

            'vista-button-checked-invalid': {
                include: 'vista-button-checked',
                style: {
                    color: 'border-invalid'
                }
            },

            'vista-button-pressed-invalid': {
                include: 'vista-button-pressed',
                style: {
                    color: 'border-invalid'
                }
            },

            'vista-button-focused-invalid': {
                include: 'vista-button-focused',
                style: {
                    color: 'border-invalid'
                }
            },

            'vista-button-checked-focused-invalid': {
                include: 'vista-button-checked-focused',
                style: {
                    color: 'border-invalid'
                }
            }

        }

    });
