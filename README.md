# idyll-d3-component

Component base class to make it easy to integrate d3 into Idyll projects

## Installation

```
npm install --save idyll-d3-component
```


## Usage

```jsx
const React = require('react');
const D3Component = require('idl-d3-component');

class CustomD3Component extends D3Component {

  initialize(svgOrCanvasNode, props) {

  }

  update(props) {

  }

}

CustomD3Component.defaultProps = {
  canvas: true
}

module.exports = CustomD3Component;
```


In order to use this component, you need to define two methods, `initialize` and `update`.

### `iniatialize(node, props)`

The initialize function is called only once when your component first mounts. Use this function to
create any necessary DOM elements and render your component with the initially provided properties.


### `update(props)`

This function is called any time the props object changes. Use this function e.g. to update
your component when bound data changes.

## Options

### canvas

The `canvas` option specifies whether to create a canvas element or an SVG. By default an SVG will be created.

The easiest way to use this is to specify a defaultProp on your component:

```jsx
class CustomD3Component extends D3Component {
  initialize(svgOrCanvasNode, props) {...}
  update(props) {...}
}
CustomD3Component.defaultProps = {
  canvas: true
}
```

If you'd rather specify this for each instantiation individually, pass the prop in your idl file:

```
[CustomD3Component canvas:`false` /]
```

### width, height

The width and height of the dom element can be specified.

```
[CustomD3Component width:500 height:200 /]
```

### style, className

A style object can optionally be provided, as can a class name.

Often it is useful to set the css width of you element to `100%`, and
then set the explicit pixel width in your component:

sets the CSS style:

```
[CustomD3Component style:`{width: "100%"}` /]
```

adds width explicitly:

```jsx
class CustomD3Component extends D3Component {
  initialize(canvas, props) {
    const width = canvas.offsetWidth;
    const height = width * 0.9;
    canvas.width = width;
    canvas.height = height;
    ...
  }
  update() {...}
}
```
