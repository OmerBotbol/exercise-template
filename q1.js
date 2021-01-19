function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let convertedInput = JSON.parse(input);
    if (toString.call(convertedInput) === '[object Array]'){
        out = true;
    }
    else{
        out = false;
    }
    output.innerText = out;
}
