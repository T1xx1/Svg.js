# Svg.js

Create and edit svg tags for your HTML using JavaScript

1. [Svg.js](#svgjs)
   1. [Getting started](#getting-started)
   2. [Documents](#documents)

## Getting started
- Download or clone `Svg.js` from this repository
- Create a `HTML` file
- Embed `Svg.js` in `HTML`
```
<script src="Svg.js/boot.js"></script>
```
- Create a `<svg></svg>`
```
<script>
     Svg.create();
</script>
```
- Edit your svg tag using the [commands](md/commands.md)
- When finished append the svg to a `HTML` node or get it
```
<script>
     Svg.append(_node);

     Svg.get();
</script>
```

## Documents
- [Commands](md/commands.md)
- [Changelog](md/changelog.md)