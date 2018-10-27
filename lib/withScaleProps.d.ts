import * as React from "react";
import { IScale, IScaleContextValue, Omit } from "./types";
export declare type IWithScaleProps<P, S extends string, K extends keyof P> = Omit<P, K> & {
    [Key in K]: P[K] | S;
};
export declare type IWithScale<P, S extends string, K extends keyof P> = React.ComponentType<IWithScaleProps<P, S, K>>;
export default function withScaleProps<T extends IScale, S extends string, K extends keyof P, P>(Component: React.ComponentType<P>, ScaleContext: React.Context<IScaleContextValue<T>>, ...props: K[]): IWithScale<P, S, K>;
