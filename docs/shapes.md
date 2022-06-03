[Back](index.md)

# Shapes
<details>
   <summary>Shapes</summary>

   - [point()](#pointx-y-r-options)
   - [line()](#linex1-y1-x2-y2-options)
   - [polyline()](#polylinepoints-options)
   - [triangle()](#trianglex1-y1-x2-y2-x3-y3-options)
   - [rect()](#rectx-y-height-width-options)
   - [square()](#squarex-y-side-options)
   - [polygon()](#polygonpoints-options)
   - [ellipse()](#ellipsecx-cy-rx-ry-options)
   - [circle()](#circlecx-cy-r-options)
   - [path()](#pathd-options)
   - [text()](#textx-y-text-options)
</details>

<br>

## point([x, y], r, options)
draw a point at `(x,y)` with radius `r`

## line([x1, y1], [x2, y2], options)
draw a line from `(x1,y1)` to `(x2,y2)`

## polyline(points, options)
draw a polyline using `points`

## triangle([x1, y1], [x2, y2], [x3, y3], options)
draw a triangle using `(x1,y1)`, `(x2,y2)` and `(x3,y3)` as vertices

## rect([x, y], height, width, options)
draw a rectagle at `(x,y)` with `height` and `width`

## square([x, y], side, options)
draw a square at `(x,y)` with `side`

## polygon(points, options)
draw a polygon using `points`

## ellipse([cx, cy], [rx, ry], options)
draw an ellipse with centre at `(cx,cy)` with `rx` and `ry` as it's radiuses

## circle([cx, cy], r, options)
drw a circle with centre at `(cx,cy)` with radius `r`

## path( d, options)
create a path with points `d`

## text([x, y], text, options)
create a text at `(x,y)` with text `text`

[Go up](#shapes)