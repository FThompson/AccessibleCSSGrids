# Accessible CSS Grids

A simple API for making CSS grids accessible by reordering or indexing grid elements according to how they are rendered.

## What's wrong with CSS grids?

CSS grid items can be positioned with precise values in CSS, allowing developers to ignore HTML source order of their grid elements. By ignoring their HTML source, developers fail to account for accessbility needs for people who use screen readers or use the tab key to traverse through elements in a document. This simple library seeks to make the underlying grid accessible by abstracting how the source elements are ordered.

## Installation

Include the script hosted on [jsDelivr CDN](https://www.jsdelivr.com/package/gh/FThompson/AccessibleCSSGrids).

```html
<script src='https://cdn.jsdelivr.net/gh/FThompson/AccessibleCSSGrids/accessible-grids.min.js'></script>
```

Or [download the script](https://github.com/FThompson/AccessibleCSSGrids/blob/master/accessible-grids.js) and include it on your page.

## Usage

This library has two functions for making grids accessible:
* `organize`, which reorders the elements source order
* `index`, which adds tab index values to the elements

You should typically use `organize` to make your grids accessible to screen reader users and to avoid adding tab index values on elements that do not need them.

```javascript
AccessibleGrids.organize(grid)
```

Reorders the given grid's elements according to the calculated grid order.

```javascript
AccessibleGrids.index(grid)
```

Adds `tabindex` values to the given grid's elements according to the calculated grid order.

## Compatibility

This library currently only supports `grid(Row|Column)Start` properties that contain one position value; `span` and identifiers are unsupported. Grid elements positioned dynamically are also unsupported.

Feel free to open issues or pull requests if you would like to help add support for the more complicated grid layouts.