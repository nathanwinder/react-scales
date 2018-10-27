import * as React from "react";
import { IScale, IScaleContextValue, IWithScale } from "./types";
export declare function withScaleProps<S extends IScale, K extends keyof P, P>(Component: React.ComponentType<P>, ScaleContext: React.Context<IScaleContextValue<S>>, ...props: K[]): IWithScale<P, S, K>;
//# sourceMappingURL=withScaleProps.d.ts.map