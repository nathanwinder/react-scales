import { createContext } from "react";
import { IScale } from "./types";

export function createScaleContext<T extends IScale>(defaultScale: T) {
  const scaleContext = createContext({ scale: defaultScale });

  (scaleContext as any).displayName = "ScaleContext";
  return scaleContext;
}
