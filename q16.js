function run() {
    const firstInput = document.getElementById("input").value;
    const lastInput = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = [];
    let firstYear = JSON.parse(firstInput);
    let lastYear = JSON.parse(lastInput);
    for(firstYear ; firstYear <= lastYear ; firstYear++){
        if(firstYear % 4 === 0 && firstYear % 100 !== 0){
            out.push(firstYear);
        }
        if(firstYear % 400 === 0){
            out.push(firstYear);
        }
    }
    output.innerText = out;
}
