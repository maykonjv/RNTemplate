export function _padding(padding) {
    if (Array.isArray(padding)) {
        if (padding.length === 1) {
            return { padding: padding[0] }
        }
        if (padding.length === 2) {
            return { paddingHorizontal: padding[0], paddingVertical: padding[1] }
        }
        if (padding.length === 4) {
            return {
                paddingLeft: padding[0],
                paddingBottom: padding[1],
                paddingRight: padding[2],
                paddingTop: padding[3]
            }
        }
    } else {
        return { padding: padding };
    }
}

export function _margin(margin) {
    if (Array.isArray(margin)) {
        if (margin.length === 1) {
            return { margin: margin[0] }
        }
        if (margin.length === 2) {
            return { marginHorizontal: margin[0], marginVertical: margin[1] }
        }
        if (margin.length === 4) {
            return {
                marginLeft: margin[0],
                marginBottom: margin[1],
                marginRight: margin[2],
                marginTop: margin[3]
            }
        }
    } else {
        return { margin: margin };
    }
}

export function _radius(radius) {
    if (Array.isArray(radius)) {
        if (radius.length === 1) {
            return { borderRadius: radius[0] }
        }

        if (radius.length === 4) {
            return {
                borderTopLeftRadius: radius[0],
                borderBottomLeftRadius: radius[1],
                borderBottomRightRadius: radius[2],
                borderTopRightRadius: radius[3]
            }
        }
    } else {
        return { borderRadius: radius };
    }
}

export function _marginWidth(margin) {
    if (Array.isArray(margin)) {
        if (margin.length === 1) {
            return margin[0] * 2
        }
        if (margin.length === 2) {
            return margin[0] * 2
        }
        if (margin.length === 4) {
            return margin[0] + margin[2]
        }
    } else {
        return margin * 2
    }
}

export function _getContrastYIQ(hexcolor) {
    if (hexcolor.includes('#')) {
        hexcolor = hexcolor.replace("#", "");
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    } else if (hexcolor.includes('rgb')) {
        if (hexcolor.split(',').length > 3) {
            if (parseFloat(hexcolor.split(',')[3].replace(/[rgba() ]/g, '')) > .3) {
                return 'white';
            } else {
                return 'black';
            }
        }
        let rgb = [];
        rgb.push(hexcolor.split(',')[0].replace(/[^\d]/g, ''))
        rgb.push(hexcolor.split(',')[1].replace(/[^\d]/g, ''))
        rgb.push(hexcolor.split(',')[2].replace(/[^\d]/g, ''))
        const brightness = Math.round(((parseInt(rgb[0]) * 299) +
            (parseInt(rgb[1]) * 587) +
            (parseInt(rgb[2]) * 114)) / 1000);
        const textColour = (brightness > 125) ? 'black' : 'white';
        return textColour;
    } else {
        return '#fff'
    }
}