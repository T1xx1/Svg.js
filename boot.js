const get_node = node => {
     return document.createElementNS("http://www.w3.org/2000/svg", node);
};

const setOptions = (node, options = {}) => {
     for (let option in options) node.setAttribute(option, options[option]);
};

const get_points = array => {
     let points = "";

     for (let cordinates of array) points += cordinates[0] + "," + cordinates[1] + " ";

     return points;
}

class Svg {
     node = undefined;
     height = undefined;
     width = undefined;
     middle = undefined;
     fixed = undefined;

     constructor(height = 150, width = 150, options = {
          fill: "transparent",
          stroke: "black",
          "stroke-width": "3px"
     }) { this.init(height, width, options) }

     get() { return this.node }
     init(height, width, options) {
          let error = 1.5;
          let halfHeight = height / 2;
          let halfWidth = width / 2;

          this.node = get_node("svg");
          this.node.setAttribute("height", height);
          this.node.setAttribute("width", width);

          setOptions(this.node, options);

          this.height = height - error;
          this.width = width - error;
          this.middle = (height + this.width) / 2;
          this.fixed = {
               bottom: {
                    left: [error, height - error],
                    right: [width - error, height - error]
               },
               centre: [halfWidth, halfHeight],
               middle: {
                    bottom: [halfWidth, height - error],
                    left: [error, halfHeight],
                    right: [width - error, halfHeight],
                    top: [halfWidth, error]
               },
               top: {
                    left: [error, error],
                    right: [width - error, error]
               }
          };
     }

     append(node) { document.querySelector(node).appendChild(this.node) }

     line([x1, y1] = this.fixed.top.left, [x2, y2] = this.fixed.bottom.right, options = {}) {
          let line_node = get_node("line");

          line_node.setAttribute("x1", x1);
          line_node.setAttribute("y1", y1);
          line_node.setAttribute("x2", x2);
          line_node.setAttribute("y2", y2);

          setOptions(line_node, options);

          this.node.appendChild(line_node);
     }
     polyline(points = [
          this.fixed.top.left,
          this.fixed.middle.bottom,
          this.fixed.top.right
     ], options = {}) {
          let polyline_node = get_node("polyline");

          polyline_node.setAttribute("points", get_points(points));

          setOptions(polyline_node, options);

          this.node.appendChild(polyline_node);
     }

     triangle([x1, y1] = this.fixed.middle.top, [x2, y2] = this.fixed.bottom.right, [x3, y3] = this.fixed.bottom.left, options = {}) { this.polygon([[x1, y1], [x2, y2], [x3, y3]], options) }
     rect([x, y] = this.fixed.top.left, height = this.height / 2, width = this.width, options = {}) {
          let rect_node = get_node("rect");

          rect_node.setAttribute("height", height);
          rect_node.setAttribute("width", width);
          rect_node.setAttribute("x", x);
          rect_node.setAttribute("y", y);

          setOptions(rect_node, options);

          this.node.appendChild(rect_node);
     }
     square([x, y] = this.fixed.top.left, side = this.height, options = {}) { this.rect([x, y], side, side, options) }
     polygon(points = [
          this.fixed.middle.top,
          this.fixed.middle.right,
          this.fixed.middle.bottom,
          this.fixed.middle.left
     ], options = {}) {
          let polygon_node = get_node("polygon");

          polygon_node.setAttribute("points", get_points(points));

          setOptions(polygon_node, options);

          this.node.appendChild(polygon_node);
     }

     ellipse([cx, cy] = this.fixed.centre, [rx, ry] = [this.middle / 2.02, this.middle / 4], options = {}) {
          let ellipse_node = get_node("ellipse");

          ellipse_node.setAttribute("cx", cx);
          ellipse_node.setAttribute("cy", cy);
          ellipse_node.setAttribute("rx", rx);
          ellipse_node.setAttribute("ry", ry);

          setOptions(ellipse_node, options);

          this.node.appendChild(ellipse_node);
     }
     circle([cx, cy] = this.fixed.centre, r = this.middle / 2.02, options = {}) {
          let circle_node = get_node("circle");

          circle_node.setAttribute("cx", cx);
          circle_node.setAttribute("cy", cy);
          circle_node.setAttribute("r", r);

          setOptions(circle_node, options);

          this.node.appendChild(circle_node);
     }

     path(d, options = {}) {
          let path_node = get_node("path");

          path_node.setAttribute("d", d);

          setOptions(path_node, options);

          this.node.appendChild(path_node);
     }

     text([x, y] = this.fixed.middle.left, text = "text", options = {
          "font-size": this.middle,
          "stroke-width": "1px"
     }) {
          let text_node = get_node("text");

          text_node.setAttribute("x", x);
          text_node.setAttribute("y", y);

          setOptions(text_node, options);

          text_node.innerHTML = text;

          this.node.appendChild(text_node);
     };
}