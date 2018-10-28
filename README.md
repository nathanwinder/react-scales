# @winderful/react-scales

Flexible TypeScript scale components that utilize React's Context and HOCs. Supports React and React Native. Works create with @winderful/react-breakpoints.

## Installation (_NPM Comming Soon_)

```
npm install github:nathanwinder/react-scales
```

```
yarn add github:nathanwinder/react-scales
```

## Features

- Access scale through Context consumer

```typescript
import { createScaleContext } from "@winderful/react-scales";

const ScaleContext = createScaleContext({ s: 16, m: 32, l: 64 });

const Box = (props: { width: number; height: number }) => <div style={props} />;
```

```html
const App = () => (
<ScaleContext.Consumer>
  {c => <Box width={c.scale.m} height={c.scale.m} />}
</ScaleContext.Consumer>;
)
```

- "Inlined" scale properties with support for auto-completion and type validation.

```typescript
import { createScaleContext, withScaleProps } from "@winderful/react-scales";

const ScaleContext = createScaleContext({ s: 16, m: 32, l: 64 });

const SBox = withScaleProps(Box, ScaleContext, "width", "height");
```

```html
const App = () => (
  <SBox width="m" height="s" />
)
```

- Mix scales with literal values.

```html
const App = () => (
  <SBox width="m" height={100} />
)
```

- Use scales with @winderful/react-breakpoints

```typescript
import { createScaleContext, withScaleProps } from "@winderful/react-scales";
import { createBreakpointContext, withBreakpointProps } from "@winderful/react-breakpoints";

...

const BSBox = withBreakpointProps(ScaleBox, BreakpointContext.Consumer, "width", "height");
```

```html
const App = () => (
  <BSBox width="m" height={{ mobile: "s", tablet: 24 }} />
)
```

- Change scale by breakpoint

```html
const App = () => (
    <BreakpointContextProvider>
        <BreakpointContext.Consumer>{bp=>(
            <ScaleContext.Provider value={{
                scale: bp === "mobile"
                ? { s: 8, m: 16, l: 32 }
                : { s: 16, m: 32, l: 64 } }}>

                <SBox width="m" height="s" />

            </ScaleContext.Provider>
        )}
        </BreakpointContext.Consumer>
    </BreakpointContextProvider>
)
```
