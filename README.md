# Svg.js

Create and edit your `svg` for `HTML` using `JavaScript`

## Index
- [Docs](docs/index.md)
- [Changelog](changelog.md)

## Getting started
- Download or clone `Svg.js`
- Create a `HTML` file
- Embed `Svg.js` in the `HTML`

```
<script src='Svg.js/index.js'></script>
```

- Create the `svg` context

```
let ctx = new Context();
```

- Edit your `svg` tag
- When finished append the `svg` in the `HTML` or get it

```
ctx.append(node);

ctx.get();
```