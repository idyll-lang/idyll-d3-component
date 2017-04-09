# idyll-d3-component

Component base class to make it easy to integrate d3 into Idyll projects

## Installation

```
npm install --save idyll-d3-component
```


## Usage

```jsx
const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class CustomD3Component extends D3Component {

  initialize(node, props) {
    // node is a <div> container,
    d3.select(node)
      .append('svg')

    //...
  }

  update(props) {
    // ...
  }

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

### className

A css class name can be provided.

Sets the className:
```
[CustomD3Component className:"d3-viz" /]
```

