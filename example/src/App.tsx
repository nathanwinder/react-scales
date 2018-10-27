import {
  createBreakpointContext,
  withBreakpointProps
} from "@winderful/react-breakpoints";
import { createScaleContext, withScaleProps } from "@winderful/react-scales";
import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

const BreakpointContext = createBreakpointContext(
  window,
  () => (window.innerWidth < 768 ? "mob" : "tab")
);

const ScaleContext = createScaleContext({
  s: 16,
  m: 32,
  l: 64
});

const Box = withBreakpointProps(
  withScaleProps(
    (props: { width: number; height: number }) => (
      <div
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: "#FF0000CC"
        }}
      />
    ),
    ScaleContext,
    "width",
    "height"
  ),
  BreakpointContext.Consumer,
  "width",
  "height"
);

class App extends React.Component {
  public render() {
    return (
      <BreakpointContext.Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Box width="l" height={{ mob: "l", tab: "m" }} />
        </div>
      </BreakpointContext.Provider>
    );
  }
}

export default App;
