# React rendering

In the index.html, the div with id='dateJs' is repainted on DOM every second.
Whereas the div with id='dateReact' is not entirely loaded.

Only the contents inside the div are repainted as they are changed every interval of 1 second.

We can also see it's hard to enter anything inside the input element inside the `dateJs`.
But, the input element inside the div `dateReact` works fine without any problem.

Let's understand what is happening here:

React doesn't use HTML directly.
It uses a tree of javascript objects to define an UI.

`For example: React.createElement`

Each element is created using React.createElement, this tree object is then used to create the HTML that the browser will understand.

That means, we are not writing HTML in javascript.

The React engine (React) and the object tree transformation (React-DOM) are separated for a reason.
React Native similarly renders the object tree with native controls used to rendered inside mobile.

`" What is displayed in the browser is merely, a relfection of the state of the application."`

## Tree reconciliation

Each time the setInterval calls the render Method in `script.js`,
the `divToRender` method generates a tree object


<table>
<td> renderState </td> <td> prevRenderState </td>
<tr>
<td>

```js
  React.createElement(
    "div",
    { className: "split" },
    React.createElement("input",
      React.createElement(
        "p",
        null,
        "sunday 4:01 pm"
      )
    )
  )
```
</td>
<td>

```js
  React.createElement(
    "div",
    { className: "split" },
    React.createElement("input",
      React.createElement(
        "p",
        null,
        "sunday 4:00 pm"
      )
    )
  )

```
</td>
</table>

React sees that only the value inside the `p` tag is different, and chooses to rerender only that part of the tree, rather than the whole object.

Only when that's done, it disposes the old tree.

This looks like a lot of hassle for react to create element tree.

## JSX

Now comes the JSX which translates using a tool to convert it into the JS `(React.createElement)`.

That tool is called `babel`.

## React workflow

`JSX` is translated into `JS with React.createElement` using `babel` tool.

Each time the app has to render react to the browser, a JS library called `React-DOM` uses these elements `(React.createElement functions in JS)` to generate the actual `HTML` that browser understands.


