# simple-react

use react with an index.html and script tags

Taking the universal module definition build of React and ReactDOM, we consume it within the index.html and see how it could be used.

React elements could not be added directly into the DOM, as they are not DOM elements.
This is where ReactDOM comes, and adds the react elements into the DOM.

```html
<script type="text/babel">
</script>
```

This lets the babel CDN to recognize the code inside the script tag and convert it to JS understandable to browser.
