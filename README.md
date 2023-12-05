# textToClipboard.js
A JavaScript library providing text copying functionality.

## Sample
[https://codepen.io/k4zuki02h4t4/pen/oNmJYmr](https://codepen.io/k4zuki02h4t4/pen/oNmJYmr)

## How To Install
1. Put `<script src="/assets/js/textToClipboard.min.js"></script>`.
1. Done.

## Document
Coding is quite simple. The options are only simple, so you won't get lost.

### Basic markup

```html
<div>
    <button type="button" class="copyBtn">Copy</button>
    <span class="copied" style="display: none">Copied!</span>
</div>
<div>
    <textarea class="textBody">Hello World!</textarea>
</div>
```

```javascript
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new CopyButtonLibrary();
    });
</script>

```


### Custom markup

```html
<div>
    <button type="button" class="copyBtn">Copy</button>
    <span class="copied" style="display: none">Copied!</span>
</div>
<div>
    <textarea class="textBody">Hello World!</textarea>
</div>
```

```javascript
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new CopyButtonLibrary({
            copyButtonClass: 'copyBtn',
            copiedClass    : 'copied',
            textBodyClass  : 'textBody'
        });
    });
</script>

```

## License
MIT License  
Copyright (c) 2023 Kaleid Pixel
