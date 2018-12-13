# Modal

Simple modal.

## Install

###### Node
```
npm install @celsowhite/modal --save
```

###### Browser
Download the library file from dist/modal.umd.js and include it in your sites files.

## Setup

###### Node

```javascript
import modal from '@celsowhite/modal';
modal();
```

###### Browser

```html
<script src="dist/modal.umd.js"></script>
<script>
    modal();
</script>
```

## Usage

To use the script you'll need to include two elements in your markup. A trigger and a modal.

###### Trigger

The trigger class can be used on any element and multiple times on the page. Each trigger element must include the data-modal-id attribute that specifies which modal it opens. Optionally, you can include a modal-content-to-show element which will be the content that is injected into the modal.

```html
<a class="modal-trigger" data-modal-id="content-modal" href="#">
    Content Modal
    <div class="modal-content-to-show hide">
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</a>
```

###### Modal

The modal will open any time a user clicks a trigger. Content will be injected into the modal only if the trigger that opened it has a modal-content-to-show element. If a modal-close element is not a child of the modal itself then you need to add data-modal-id so it knows which modal to close.

```html
<div class="modal" id="content-modal">
    <div class="modal__content"></div>
    <div class="close-icon modal-close"></div>
</div>
```

###### Styling

This library only handles the modal open/close script functionality. You can view/use my sample styling in demo/demo.css.

## Options

The library includes default class names for elements. Those names can be customized to match your markup.

```js
modal({
    modalElement: '.modal', // The modal element.
    modalTriggerElement: '.modal-trigger', // The element that will trigger a modal to open.
    modalCloseElement: '.modal-close', // The element that will trigger a modal to close. Must be a child of the modal element.
    modalContentElement: '.modal__content', // The content element that will be populated when the modal is opened.
    modalContents: '.modal-content-to-show', // The modal contents that will appear when a specific trigger is clicked. Must be a child of the modal trigger element.
    modalOpenClass: 'modal--is-open' // Class that is toggled on the modal element when the modal is open/closed.
})
```

## Events

You can listen for the open/close events on each modal.

```js
var modals = document.querySelectorAll('.modal');

modals.forEach(function(modal){

    modal.addEventListener('open', function (e) {
        console.log(e.target);
    });

    modal.addEventListener('close', function (e) {
        console.log(e.target);
    });

});
```

## License

MIT License © [Celso White](https://celsowhite.com)