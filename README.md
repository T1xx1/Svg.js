# svg.js

Create and edit svg tags for your HTML using JavaScript

1. [svg.js](#svgjs)
   1. [Getting started](#getting-started)
   2. [Documents](#documents)

## Getting started
- Download or clone `svg.js`
- Create a `HTML` file
- Embed `svg.js` in `HTML`
```
<script src="svg.js/boot.js"></script>
```
- Create a svg
```
<script>
     svg.create();
</script>
```
- Edit your svg tag using the [commands](md/commands.md)
- When finished append the svg to a `HTML` node or get it
```
<script>
     svg.append(_node);

     svg.get();
</script>
```

## Documents
- [Commands](md/commands.md)
- [Changelog](md/changelog.md)