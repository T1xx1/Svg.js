function create_node(_node) {
     return document.createElementNS("http://www.w3.org/2000/svg", _node);
}

function setOptions(_node, options = {}) {
     if (options != {}) {
          for (let option in options) _node.setAttribute(option, options[option]);
     }
}

const svg = {
     fixedPoint: undefined,
     height: undefined,
     mid: undefined,
     node: undefined,
     width: undefined,

     set: (svg_node) => {
          if (svg_node != undefined) {
               svg.node = svg_node;

               svg.height = svg_node.getAttribute("height");
               svg.width = svg_node.getAttribute("width");

               let halfHeight = svg.height / 2;
               let halfWidth = svg.width / 2;

               svg.fixedPoint = {
                    bottom: {
                         left: [0, svg.height],
                         mid: [halfWidth, svg.height],
                         right: [svg.width, svg.height]
                    },
                    centre: [halfWidth, halfHeight],
                    left: {
                         mid: [0, halfHeight],
                    },
                    right: {
                         mid: [svg.width, halfHeight]
                    },
                    top: {
                         mid: [halfWidth, 0],
                         right: [svg.width, 0]
                    }
               };
               svg.mid = (parseInt(svg.height) + parseInt(svg.width)) / 4.1;
          }
     },
     unset: () => {
          svg.fixedPoint = undefined;
          svg.height = undefined;
          svg.mid = undefined;
          svg.node = undefined;
          svg.width = undefined;
     },
     get: () => { return svg.node },

     create: (_height = 150, _width = 150, options = {
          "fill": "transparent",
          "stroke": "black"
     }) => {
          let svg_node = create_node("svg");

          svg_node.setAttribute("height", _height);
          svg_node.setAttribute("width", _width);

          setOptions(svg_node, options);

          svg.set(svg_node);
     },
     append: (_node = document.querySelector("body")) => {
          _node.appendChild(svg.node);

          svg.unset();
     },

     line: ([x1, y1] = [0, 0], [x2, y2] = svg.fixedPoint.bottom.right, options = {}) => {
          let line_node = create_node("line");

          line_node.setAttribute("x1", x1);
          line_node.setAttribute("y1", y1);
          line_node.setAttribute("x2", x2);
          line_node.setAttribute("y2", y2);

          setOptions(line_node, options);

          svg.node.appendChild(line_node);
     },
     polyline: (points = String([0, 0] + " " + svg.fixedPoint.centre + " " + svg.fixedPoint.top.right), options = {}) => {
          let polyline_node = create_node("polyline");

          polyline_node.setAttribute("points", points);

          setOptions(polyline_node, options);

          svg.node.appendChild(polyline_node);
     },

     triangle: ([x1, y1] = svg.fixedPoint.top.mid, [x2, y2] = svg.fixedPoint.bottom.right, [x3, y3] = svg.fixedPoint.bottom.left, options = {}) => {
          svg.polygon(x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3, options);
     },
     rect: ([x, y] = [0, 0], height = svg.height / 2, width = svg.width, options = {}) => {
          let rect_node = create_node("rect");

          rect_node.setAttribute("x", x);
          rect_node.setAttribute("y", y);
          rect_node.setAttribute("width", width);
          rect_node.setAttribute("height", height);

          setOptions(rect_node, options);

          svg.node.appendChild(rect_node);
     },
     square: ([x, y] = [0, 0], side = svg.height, options = {}) => {
          svg.rect([x, y], side, side, options);
     },
     polygon: (points, options = {}) => {
          let polygon_node = create_node("polygon");

          polygon_node.setAttribute("points", points);

          setOptions(polygon_node, options);

          svg.node.appendChild(polygon_node);
     },

     ellipse: ([cx, cy] = svg.fixedPoint.centre, [rx, ry] = [svg.mid, svg.mid / 2], options = {}) => {
          let ellipse_node = create_node("ellipse");

          ellipse_node.setAttribute("cx", cx);
          ellipse_node.setAttribute("cy", cy);
          ellipse_node.setAttribute("rx", rx);
          ellipse_node.setAttribute("ry", ry);

          setOptions(ellipse_node, options);

          svg.node.appendChild(ellipse_node);
     },
     circle: ([cx, cy] = svg.fixedPoint.centre, r = svg.mid, options = {}) => {
          let circle_node = create_node("circle");

          circle_node.setAttribute("cx", cx);
          circle_node.setAttribute("cy", cy);
          circle_node.setAttribute("r", r);

          setOptions(circle_node, options);

          svg.node.appendChild(circle_node);
     },

     path: (d, options = {}) => {
          let path_node = create_node("path");

          path_node.setAttribute("d", d);

          setOptions(path_node, options);

          svg.node.appendChild(path_node);
     },

     text: ([x, y] = svg.fixedPoint.left.mid, text = "text", options = {
          "font-size": svg.mid
     }) => {
          let text_node = create_node("text");

          text_node.setAttribute("x", x);
          text_node.setAttribute("y", y);

          setOptions(text_node, options);

          text_node.innerHTML = text;

          svg.node.appendChild(text_node);
     }
};