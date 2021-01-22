function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = [];
    let arrList  = JSON.parse(input);
    let count = 0;
    for (let i = 0; i < arrList.length; i++) {
        for (let n = i; n < arrList.length; n++) {
            if(i === n){
                n++;
            }
            if(arrList[i] === arrList[n] && arrList[n] !== undefined){
                count++;
                delete arrList[n];
            }
        }
        if (count !== 0){
            out.push(arrList[i]);
            count = 0;
        }
    }
    output.innerText = out;
}