<link rel="stylesheet" href="../.ignore/style.css">

[Back](index.md)

# Methods
<details>
   <summary>Commands</summary>

   - [Svg()](#constructorheight-width-options)
   - [get](#get)
   - [init](#initheight-width-options)
   - [append](#appendnode)
   - [line](#linex1-y1-x2-y2-options)
   - [polyline](#polylinepoints-options)
   - [triangle](#trianglex1-y1-x2-y2-x3-y3-options)
   - [rect](#rectx-y-height-width-options)
   - [square](#squarex-y-side-options)
   - [polygon](#polygonpoints-options)
   - [ellipse](#ellipsecx-cy-rx-ry-options)
   - [circle](#circlecx-cy-r-options)
   - [path](#pathd-options)
   - [text](#textx-y-text-options)
</details>

## Svg(height, width, options)
create a svg with `height` and `width`
default options:
   - fill: tranparent
   - stroke: black
   - stroke-width: 3px

## get()
return the svg

## init(height, width, options)
initialize a new svg

## append(node)
append the svg to `node`

## line([x1, y1], [x2, y2], options)
create a line from `x1` `y1` to `x2` `y2`

## polyline(points, options)
create a polyline using `points`

## triangle([x1, y1], [x2, y2], [x3, y3], options)
create a triangle using `x1` `y1`, `x2` `y2` and `x3` `y3` as summits

## rect([x, y], height, width, options)
create a rectagle starting from `x` and `y` with dimensions `height` and `width`

## square([x, y], side, options)
create a square starting from `x` and `y` with dimension `side`

## polygon(points, options)
create a polygon using `points`

## ellipse([cx, cy], [rx, ry], options)
create an ellipse with centre in `cx` and `cy` with `rx` and `ry` as it's radiuses

## circle([cx, cy], r, options)
create a circle with centre in `cx` and `cy` and `r` as radius

## path(d, options)
create a path

## text([x, y], text, options)
create a text in `x` and `y` with `text`

[Go up](#commands)