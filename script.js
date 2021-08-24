let textarea = document.querySelector('textarea');
let input = document.querySelector('input');
let div = document.querySelector('.test');

let reader = new FileReader();

input.addEventListener('change', () => {
    let files = input.files;

    if(files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);

        // div.innerHTML = lines.join('\n');

        textarea.value = lines.join('\n');
    }

    reader.oneerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
});