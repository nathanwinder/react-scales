export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IScale {
  [key: string]: number;
}

export interface IScaleContextValue<T extends IScale> {
  scale: T;
}

export type ScaledProps<P, S> = { [K in keyof P]: P[K] | keyof S };

export type IWithScaleProps<P, S, K extends keyof P> = Omit<P, K> &
  Omit<P, K> &
  Pick<ScaledProps<P, S>, K>;

export type IWithScale<P, S, K extends keyof P> = React.ComponentType<
  IWithScaleProps<P, S, K>
>;
