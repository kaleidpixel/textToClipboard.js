# textToClipboard.js
A JavaScript library providing text copying to clipboard.

## Sample
[https://codepen.io/k4zuki02h4t4/pen/oNmJYmr](https://codepen.io/k4zuki02h4t4/pen/oNmJYmr)

## How To Install
1. Put `<script src="/assets/js/TextToClipboard.min.js"></script>`.
1. Done.

## Document
Coding is quite simple. The options are only simple, so you won't get lost.

### Basic markup

```html
<div>
    <div>
        <button type="button" class="copyBtn">Copy</button>
        <span class="copied" style="display: none">Copied!</span>
    </div>
    <label>
        <textarea class="textBody">Hello World!</textarea>
    </label>
</div>
```

```javascript
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new TextToClipboard();
    });
</script>

```


### Custom markup

```html
<div>
    <div>
        <button type="button" class="copyBtn">Copy</button>
        <span class="copied" style="display: none">Copied!</span>
    </div>
    <label>
        <textarea class="textBody">Hello World!</textarea>
    </label>
</div>
```

```javascript
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new TextToClipboard({
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
