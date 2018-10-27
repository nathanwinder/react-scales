export type ValueMap<T extends string> = { [Key in T]: number };

export type ScaleMap<B extends string, V extends string> = {
  [Key in B]: ValueMap<V>
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IScale {
  [key: string]: number;
}

export interface IScaleContextValue<T extends IScale> {
  scale: T;
}
