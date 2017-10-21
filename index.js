const React = require('react');
const ReactDOM = require('react-dom');

class D3Component extends React.Component {
  componentDidMount() {
    if (super.componentDidMount) {
      super.componentDidMount();
    }
    const node = ReactDOM.findDOMNode(this);
    this.initialize(node, this.props);
  }

  initialize() {
  }

  update() {
  }

  componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className, style } = this.props;
    return React.createElement('div', { className, style });
  }
}

module.exports = D3Component;
