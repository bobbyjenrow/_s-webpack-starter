# Sass Filesystem Boilerplate

Check out this series on modern css structure: https://zellwk.com/blog/css-architecture-3/
and this too:
http://bradfrost.com/blog/post/css-architecture-for-design-systems/

Use BEM with namespacing:

## Layout
```
<div class="l-page">
  <div class="l-head">
  </div>
</div>
```

### Objects
`<button class=".o-button" />`
- Small
- Do not contain other objects or components
- Unaware of Context

### Components
```
<div class="c-auth">
  <div class="c-auth__heading">
  </div>
  <form class="c-auth__form">
    <input type="text" class="c-auth__input">
    <button class="o-button c-auth"></button>
  </form>
</div>
```
- Large
- May contain other objects or components
- Aware of Context
