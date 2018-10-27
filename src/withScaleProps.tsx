import * as React from "react";
import { IScale, IScaleContextValue, Omit } from "./types";

export type IWithScaleProps<P, S extends string, K extends keyof P> = Omit<
  P,
  K
> &
  { [Key in K]: P[K] | S };

export type IWithScale<
  P,
  S extends string,
  K extends keyof P
> = React.ComponentType<IWithScaleProps<P, S, K>>;

export default function withScaleProps<
  T extends IScale,
  S extends string,
  K extends keyof P,
  P
>(
  Component: React.ComponentType<P>,
  ScaleContext: React.Context<IScaleContextValue<T>>,
  ...props: K[]
): IWithScale<P, S, K> {
  type ScaledProps = { [Key in K]: P[K] | S };
  class WithScale extends React.Component<Omit<P, K> & ScaledProps> {
    public render() {
      return (
        <ScaleContext.Consumer>
          {(s) => {
            const updatedProps: any = {};
            for (const k of props) {
              const value = this.props[k];
              if (typeof value === "number") {
                updatedProps[k] = value;
              } else {
                updatedProps[k] = s.scale[this.props[k] as any];
              }
            }

            return <Component {...this.props} {...updatedProps} />;
          }}
        </ScaleContext.Consumer>
      );
    }
  }

  (WithScale as any).displayName = `${Component.name}.WithScaleProps`;
  return WithScale;
}
