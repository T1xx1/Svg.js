<link rel="stylesheet" href=".ignore/style.css">

# Svg.js

Create and edit svg for your HTML using JavaScript

## Index
- [Documentation](documentation/index.md)
- [Changelog](changelog.md)

## Getting started
- Download or clone `Svg.js`
- Create a `HTML` file
- Embed `Svg.js` in `HTML`
```
<script src="svg.js/boot.js"></script>
```
- Create a `SVG`
```
<script>
     let svg = new Svg();
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