const create_node = (node) => {
     return document.createElementNS("http://www.w3.org/2000/svg", node);
}

const setOptions = (node, options = {}) => {
     if (options != {}) {
          for (let option in options) node.setAttribute(option, options[option]);
     }
}

const svg = {
     parent: document.querySelector("body"),

     fixedPoint: undefined,
     height: undefined,
     middle: undefined,
     node: undefined,
     width: undefined,

     create: (height = 150, width = 150, options = {
          "fill": "transparent",
          "stroke": "black",
          "stroke-width": 3
     }) => {
          let node = create_node("svg");

          node.setAttribute("height", height);
          node.setAttribute("width", width);

          setOptions(node, options);

          svg.set.node(node);
     },
     get: () => {
          return svg.node;
     },
     set: {
          node: (svg_node = svg.create()) => {
               svg.node = svg_node;

               svg.height = svg_node.getAttribute("height");
               svg.width = svg_node.getAttribute("width");

               let halfHeight = svg.height / 2;
               let halfWidth = svg.width / 2;

               svg.fixedPoint = {
                    bottom: {
                         left: [1, svg.height - 1],
                         middle: [halfWidth - 1, svg.height - 1],
                         right: [svg.width - 1, svg.height - 1]
                    },
                    centre: [halfWidth - 1, halfHeight - 1],
                    left: {
                         middle: [1, halfHeight - 1]
                    },
                    right: {
                         middle: [svg.width - 1, halfHeight - 1]
                    },
                    top: {
                         left: [1, 1],
                         middle: [halfWidth - 1, 1],
                         right: [svg.width - 1, 1]
                    }
               };

               svg.middle = (parseInt(svg.height) + parseInt(svg.width)) / 4.1;
          },
          parent: (parent = svg.parent) => svg.parent = parent
     },
     unset: () => {
          svg.fixedPoint = undefined;
          svg.height = undefined;
          svg.middle = undefined;
          svg.node = undefined;
          svg.width = undefined;
     },
     append: (node = svg.parent) => {
          node.appendChild(svg.node);

          svg.unset();
     },

     line: ([x1, y1] = svg.fixedPoint.top.left, [x2, y2] = svg.fixedPoint.bottom.right, options = {}) => {
          let line_node = create_node("line");

          line_node.setAttribute("x1", x1);
          line_node.setAttribute("y1", y1);
          line_node.setAttribute("x2", x2);
          line_node.setAttribute("y2", y2);

          setOptions(line_node, options);

          svg.node.appendChild(line_node);
     },
     polyline: (points = [
          svg.fixedPoint.top.left,
          svg.fixedPoint.bottom.middle,
          svg.fixedPoint.top.right
     ], options = {}) => {
          let polyline_node = create_node("polyline");

          let points_string = "";

          for (let point of points) {
               points_string += point[0] + "," + point[1] + " ";
          }

          polyline_node.setAttribute("points", points_string);

          setOptions(polyline_node, options);

          svg.node.appendChild(polyline_node);
     },

     triangle: ([x1, y1] = svg.fixedPoint.top.middle, [x2, y2] = svg.fixedPoint.bottom.right, [x3, y3] = svg.fixedPoint.bottom.left, options = {}) => {
          svg.polygon(x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3, options);
     },
     rect: ([x, y] = svg.fixedPoint.top.left, height = svg.height / 2, width = svg.width, options = {}) => {
          let rect_node = create_node("rect");

          rect_node.setAttribute("x", x);
          rect_node.setAttribute("y", y);
          rect_node.setAttribute("width", width);
          rect_node.setAttribute("height", height);

          setOptions(rect_node, options);

          svg.node.appendChild(rect_node);
     },
     square: ([x, y] = svg.fixedPoint.top.left, side = svg.height, options = {}) => {
          svg.rect([x, y], side, side, options);
     },
     polygon: (points, options = {}) => {
          let polygon_node = create_node("polygon");

          polygon_node.setAttribute("points", points);

          setOptions(polygon_node, options);

          svg.node.appendChild(polygon_node);
     },

     ellipse: ([cx, cy] = svg.fixedPoint.centre, [rx, ry] = [svg.middle, svg.middle / 2], options = {}) => {
          let ellipse_node = create_node("ellipse");

          ellipse_node.setAttribute("cx", cx);
          ellipse_node.setAttribute("cy", cy);
          ellipse_node.setAttribute("rx", rx);
          ellipse_node.setAttribute("ry", ry);

          setOptions(ellipse_node, options);

          svg.node.appendChild(ellipse_node);
     },
     circle: ([cx, cy] = svg.fixedPoint.centre, r = svg.middle, options = {}) => {
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

     text: ([x, y] = svg.fixedPoint.left.middle, text = "text", options = {
          "font-size": svg.middle
     }) => {
          let text_node = create_node("text");

          text_node.setAttribute("x", x);
          text_node.setAttribute("y", y);

          setOptions(text_node, options);

          text_node.innerHTML = text;

          svg.node.appendChild(text_node);
     }
};