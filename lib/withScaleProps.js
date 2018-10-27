import * as React from "react";
export function withScaleProps(Component, ScaleContext, ...props) {
    class WithScale extends React.Component {
        render() {
            return (React.createElement(ScaleContext.Consumer, null, (s) => {
                const updatedProps = {};
                for (const k of props) {
                    const value = this.props[k];
                    if (typeof value === "number") {
                        updatedProps[k] = value;
                    }
                    else {
                        updatedProps[k] = s.scale[this.props[k]];
                    }
                }
                return React.createElement(Component, Object.assign({}, this.props, updatedProps));
            }));
        }
    }
    WithScale.displayName = `${Component.name}.WithScaleProps`;
    return WithScale;
}
//# sourceMappingURL=withScaleProps.js.map