const React = require('react');
const ReactDOM = require('react-dom');
const IdyllComponent = require('idyll-component');

class D3 extends IdyllComponent {

  componentDidMount() {
    if (super.componentDidMount) {
      super.componentDidMount();
    }
    const node = ReactDOM.findDOMNode(this);
    this.initialize(node, this.props);
  }

  initialize() {
    console.warn('initialize() not defined on D3Component.');
  }

  update() {
    console.warn('update() not defined on D3Component.');
  }

  componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const drawNode = this.props.canvas ? 'canvas' : 'svg';
    const { className, style } = this.props;
    return React.createElement(drawNode, { className, style });
  }
}

module.exports = D3;