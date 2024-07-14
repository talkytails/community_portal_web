if (typeof marked !== 'undefined') {

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    const updatePreview = debounce(() => {
        document.querySelector("#postPreview").style.display = "flex";
        var inputValue = askQTextArea.value;
        var sanitizedValue = DOMPurify.sanitize(inputValue);
        var formattedValue = marked.parse(sanitizedValue);
        previewQDesc.innerHTML = formattedValue;
    }, 200); // Update preview after 200ms of no typing

    askQTitle.addEventListener("input", function () {
        document.querySelector("#postPreview").style.display = "flex";
        previewQTitle.innerHTML = askQTitle.value;
    });

    askQTextArea.addEventListener("input", updatePreview);
} else {
    console.error("Marked.js library not found. Markdown preview unavailable.");
}


// Logic for making text bold
document.querySelector("#boldButton").addEventListener("click", function (){
    var textArea = document.querySelector("#askQTextArea");
    var start = textArea.selectionStart;
    var end = textArea.selectionEnd;
    var selectedText = textArea.value.substring(start, end);
    var beforeText = textArea.value.substring(0, start);
    var afterText = textArea.value.substring(end);

    var newText = beforeText + '**' + selectedText + '**' + afterText;
    textArea.value = newText;
    textArea.setSelectionRange(start, end + 4);
});

// Logic for making text Italic
document.querySelector("#italicButton").addEventListener("click", function (){
    var textArea = document.querySelector("#askQTextArea");
    var start = textArea.selectionStart;
    var end = textArea.selectionEnd;
    var selectedText = textArea.value.substring(start, end);
    var beforeText = textArea.value.substring(0, start);
    var afterText = textArea.value.substring(end);

    var newText = beforeText + '*' + selectedText + '*' + afterText;
    textArea.value = newText;
    textArea.setSelectionRange(start, end + 4);
});

