class Context {
   height = undefined;
   width = undefined;
   fixedPoint = {};

   children = [];

   options = {
      fill: 'transparent',
      'font-size': '50px',
      stroke: '#000000',
      'stroke-width': '3px'
   };

   constructor(height = 150, width = 150, options = {}) {
      this.height = height;
      this.width = width;

      this.average = (this.height + this.width) / 2;

      this.drawingError = this.average / 100;

      this.fixedPoint = {
         top: {
            left: [this.drawingError, this.drawingError],
            center: [(this.width - this.drawingError) / 2, this.drawingError],
            right: [this.width - this.drawingError, this.drawingError]
         },
         center: {
            left: [this.drawingError, (this.height - this.drawingError) / 2],
            center: [(this.width - this.drawingError) / 2, (this.height - this.drawingError) / 2],
            right: [this.width - this.drawingError, (this.height - this.drawingError) / 2]
         },
         bottom: {
            left: [this.drawingError, this.height - this.drawingError],
            center: [(this.width - this.drawingError) / 2, this.height - this.drawingError],
            right: [this.width - this.drawingError, this.height - this.drawingError]
         }
      };

      for (let option in options) this.options[option] = options[option];
   }

   get() {
      let svg = new Element('svg');

      svg.style.set({
         height: this.height,
         width: this.width
      });
      svg.style.set(this.options);

      svg = svg.node;

      for (let child of this.children) {
         child.style.set(this.options);

         svg.appendChild(child.node);
      }

      return svg;
   }

   append(node) {
      document.querySelector(node).appendChild(this.get());
   }

   convertInPoints(array) {
      let points = '';

      for (let coordinates of array) points += `${coordinates[0]},${coordinates[1]} `;

      return points;
   }

   draw = {
      point: ([x, y] = this.fixedPoint.center.center, r = 3, options = {
         fill: '#000000'
      }) => {
         let point = new Element('circle');

         point.style.set({
            cx: x,
            cy: y,
            r: r
         });
         point.style.set(options);

         this.children.push(point);
      },
   
      line: ([x1, y1] = this.fixedPoint.top.left, [x2, y2] = this.fixedPoint.bottom.right, options = {}) => {
         let line = new Element('line');

         line.style.set({
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
         });
         line.style.set(options);

         this.children.push(line);
      },
      polyline: (points = [
         this.fixedPoint.top.left,
         this.fixedPoint.bottom.center,
         this.fixedPoint.top.right
      ], options = {}) => {
         let polyline = new Element('polyline');

         polyline.style.set({
            points: this.convertInPoints(points)
         });
         polyline.style.set(options);

         this.children.push(polyline);
      },
   
      triangle: ([x1, y1] = this.fixedPoint.top.center, [x2, y2] = this.fixedPoint.bottom.right, [x3, y3] = this.fixedPoint.bottom.left, options = {}) => {
         this.draw.polygon([[x1, y1], [x2, y2], [x3, y3]], options);
      },
   
      rect: ([x, y] = this.fixedPoint.top.left, height = (this.height - this.drawingError * 2) / 2, width = this.width - this.drawingError * 2, options = {}) => {
         let rect = new Element('rect');

         rect.style.set({
            x: x,
            y: y,
            height: height,
            width: width
         });
         rect.style.set(options);

         this.children.push(rect);
      },
      square: ([x, y] = this.fixedPoint.top.left, side = this.height - this.drawingError * 2, options = {}) => {
         this.draw.rect([x, y], side, side, options);
      },
   
      polygon: ( points = [
         this.fixedPoint.top.center,
         this.fixedPoint.center.right,
         this.fixedPoint.bottom.center,
         this.fixedPoint.center.left
      ], options = {}) => {
         let polygon = new Element('polygon');

         polygon.style.set({
            points: this.convertInPoints(points)
         });
         polygon.style.set(options);

         this.children.push(polygon);
      },
   
      ellipse: ([cx, cy] = this.fixedPoint.center.center, [rx, ry] = [(this.average - this.drawingError * 2) / 2, (this.average - this.drawingError * 2) / 4], options = {}) => {
         let ellipse = new Element('ellipse');

         ellipse.style.set({
            cx: cx,
            cy: cy,
            rx: rx,
            ry: ry
         });
         ellipse.style.set(options);

         this.children.push(ellipse);
      },
      circle: ([cx, cy] = this.fixedPoint.center.center, r = (this.average - this.drawingError * 2) / 2, options = {}) => {
         let circle = new Element('circle');

         circle.style.set({
            cx: cx,
            cy: cy,
            r: r
         });
         circle.style.set(options);

         this.children.push(circle);
      },
   
      path: (d, options = {}) => {
         let path = new Element('path');

         path.style.set({
            x: x,
            y: y,
            d: d
         });
         path.style.set(options);

         this.children.push(path);
      },
   
      text: ([x, y] = this.fixedPoint.bottom.left, text = 'Text', options = {}) => {
         let text_ = new Element('text');

         text_.style.set({
            x: x,
            y: y
         });
         text_.style.set(options);

         text_.node.innerHTML = text;

         this.children.push(text_);
      }
   };
}

class Element {
   style = {
      set: options => {
         for (let option in options) {
            if (!this.node.hasAttribute(option)) this.node.setAttribute(option, options[option]);
         }
      },
      remove: options => {
         for (let option of options) this.node.removeAttribute(option);
      }
   };

   constructor(element) {
      this.node = document.createElementNS('http://www.w3.org/2000/svg', element);
   }
}