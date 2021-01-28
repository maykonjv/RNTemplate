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
                borderBottomLefttRadius: radius[1],
                borderBottomRightRadius: radius[2],
                borderTopRightRadius: radius[3]
            }
        }
    } else {
        return { borderRadius: radius };
    }
}