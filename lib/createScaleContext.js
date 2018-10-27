import { createContext } from "react";
export function createScaleContext(defaultScale) {
    const scaleContext = createContext({ scale: defaultScale });
    scaleContext.displayName = "ScaleContext";
    return scaleContext;
}
//# sourceMappingURL=createScaleContext.js.map