<link rel="stylesheet" href=".info/style.css">

# Svg.js

Create and edit svg tags for your HTML using JavaScript

## Contents
- [Getting started](#getting-started)
- [Documentation](documentation/index.md)
- [Changelog](changelog.md)

## Getting started
- Download or clone `svg.js`
- Create a `HTML` file
- Embed `svg.js` in `HTML`
```
<script src="svg.js/boot.js"></script>
```
- Create a `SVG`
```
<script>
     let svg = new Svg;
</script>
```
- Edit your `SVG` tag
- When finished append the `SVG` to a `HTML` node or get it
```
<script>
     svg.append(node);

     svg.get();
</script>
```