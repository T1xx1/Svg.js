function create_node(_node) {
     return document.createElementNS("http://www.w3.org/2000/svg", _node);
}

function setOptions(_node, options = {}) {
     if (options != {}) {
          for (let option in options) {
               _node.setAttribute(option, options[option]);
          }
     }
}

var Svg = {
     height: undefined,
     mid: undefined,
     node: undefined,
     width: undefined,

     set: (svg_node) => {
          if (svg_node != undefined) {
               Svg.node = svg_node;

               Svg.height = svg_node.getAttribute("height");
               Svg.width = svg_node.getAttribute("width");

               Svg.mid = (Svg.height + Svg.width) / 2;
          };
     },
     get: (property) => {
          if (Svg[property] == undefined) {
               return Svg.node;
          } else return Svg[property];
     },

     create: (_height = 100, _width = 100, options = {}) => {
          let svg_node = create_node("svg");

          svg_node.setAttribute("height", _height);
          svg_node.setAttribute("width", _width);

          setOptions(svg_node, options);

          Svg.set(svg_node);
     },
     append: (_node) => {
          if (_node != undefined) {
               _node.appendChild(Svg.node);

               Svg.node = undefined;
          }
     },

     dot: ([cx, cy], r, options = {}) => {
          options.fill = "black";

          Svg.circle([cx, cy], r, options);
     },

     line: ([x1, y1], [x2, y2], options = {}) => {
          let line_node = create_node("line");

          line_node.setAttribute("x1", x1);
          line_node.setAttribute("y1", y1);
          line_node.setAttribute("x2", x2);
          line_node.setAttribute("y2", y2);

          setOptions(line_node, options);

          Svg.node.appendChild(line_node);
     },
     cross: () => {},
     polyline: (points, options = {}) => {
          let polyline_node = create_node("polyline");

          polyline_node.setAttribute("points", points);

          setOptions(polyline_node, options);

          Svg.node.appendChild(polyline_node);
     },
     
     triangle: ([x1, y1], [x2, y2], [x3, y3], options = {}) => {
          Svg.polygon(x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3, options);
     },
     rect: ([x, y], width, height, options = {}) => {
          let rect_node = create_node("rect");

          rect_node.setAttribute("x", x);
          rect_node.setAttribute("y", y);
          rect_node.setAttribute("width", width);
          rect_node.setAttribute("height", height);

          setOptions(rect_node, options);

          Svg.node.appendChild(rect_node);
     },
     square: ([x, y], side, options = {}) => {
          Svg.rect([x, y], side, side, options);
     },
     polygon: (points, options = {}) => {
          let polygon_node = create_node("polygon");

          polygon_node.setAttribute("points", points);

          setOptions(polygon_node, options);

          Svg.node.appendChild(polygon_node);
     },

     ellipse: ([cx, cy], [rx, ry], options = {}) => {
          let ellipse_node = create_node("ellipse");

          ellipse_node.setAttribute("cx", cx);
          ellipse_node.setAttribute("cy", cy);
          ellipse_node.setAttribute("rx", rx);
          ellipse_node.setAttribute("ry", ry);

          setOptions(ellipse_node, options);

          Svg.node.appendChild(ellipse_node);
     },
     circle: ([cx, cy], r, options = {}) => {
          let circle_node = create_node("circle");

          circle_node.setAttribute("cx", cx);
          circle_node.setAttribute("cy", cy);
          circle_node.setAttribute("r", r);

          setOptions(circle_node, options);

          Svg.node.appendChild(circle_node);
     },

     path: (d, options = {}) => {
          let path_node = create_node("path");

          path_node.setAttribute("d", d);

          setOptions(path_node, options);

          Svg.node.appendChild(path_node);
     },

     text: ([x, y], text, options = {}) => {
          let text_node = create_node("text");

          text_node.setAttribute("x", x);
          text_node.setAttribute("y", y);

          setOptions(text_node, options);
          
          text_node.innerHTML = text;

          Svg.node.appendChild(text_node);
     }
};