import * as React from "react";
import {
  IScale,
  IScaleContextValue,
  IWithScale,
  Omit,
  ScaledProps
} from "./types";

export function withScaleProps<S extends IScale, K extends keyof P, P>(
  Component: React.ComponentType<P>,
  ScaleContext: React.Context<IScaleContextValue<S>>,
  ...props: K[]
): IWithScale<P, S, K> {
  class WithScale extends React.Component<
    Omit<P, K> & Pick<ScaledProps<P, S>, K>
  > {
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
