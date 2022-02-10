<link rel="stylesheet" href="../.info/style.css">

[Back](index.md)

# Commands
<details>
   <summary>Commands</summary>

   - [set](#set)
   - [unset](#unset)
   - [get](#get)
   - [create](#create)
   - [append](#append)
   - [line](#line)
   - [polyline](#polyline)
   - [triangle](#triangle)
   - [rect](#rect)
   - [square](#square)
   - [polygon](#polygon)
   - [ellipse](#ellipse)
   - [circle](#circle)
   - [path](#path)
   - [text](#text)
</details>

<br>

## set
> `svg_node`

set `svg_node` as the default svg for editing it

## unset
unset the default svg

## get
return the default svg

## create
> `_height` `_width` `options`

create a svg tag with `_height` and `_width` and set it as default

## append
> `_node`

append to `_node` the default svg

## line
> `x1` `y1` `x2` `y2` `options`

create a line from `x1` `y1` cordinates to `x2` `y2`

## polyline
> `points` `options`

create a polyline using `points`

## triangle
> `x1` `y1` `x2` `y2` `x3` `y3` `options`

create a triangle using `x1` `y1`, `x2` `y2` and `x3` `y3`

## rect
> `x` `y` `height` `width` `options`

create a rectagle starting from `x1` `y1` with `height` and `width`

## square
> `x` `y` `side` `options`

create a square

## polygon
> `points` `options`

create a polygon

## ellipse
> `cx` `cy` `rx` `ry` `options`

create an ellipse

## circle
> `cx` `cy` `r` `options`

create a circle

## path
> `d` `options`

create a path

## text
> `x` `y` `text` `options`

create a text

[Go up](#commands)