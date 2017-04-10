const D3Component = require('./d3');
const d3 = require('d3');

class CircleWave extends D3Component {

  initialize(node, props) {
    var svg = d3.select(node);
    var width = node.getBoundingClientRect().width;
    var height = width;

    svg.attr('width', width);
    svg.attr('height', height);

    var angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

    var path = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .attr("fill", "none")
        .attr("stroke-width", 3)
        .attr("stroke-linejoin", "round")
      .selectAll("path")
      .data(["cyan", "magenta", "yellow"])
      .enter().append("path")
        .attr("stroke", function(d) { return d; })
        .style("mix-blend-mode", "darken")
        .datum(function(d, i) {
          return d3.radialLine()
              .curve(d3.curveLinearClosed)
              .angle(function(a) { return a; })
              .radius(function(a) {
                var t = d3.now() / 1000;
                return width / 3 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3) * width / 20;
              });
        });

    d3.timer(function() {
      path.attr("d", function(d) {
        return d(angles);
      });
    });
  }
}

module.exports = CircleWave;
