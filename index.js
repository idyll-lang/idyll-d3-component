const React = require('react');
const ReactDOM = require('react-dom');
const IdyllComponent = require('idyll-component');

class D3Component extends IdyllComponent {
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
    const { className, style, width, height } = this.props;
    return React.createElement('div', { className, style, width, height });
  }
}

module.exports = D3Component;
