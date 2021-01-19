function run() {
const input = document.getElementById("input").value;
const output = document.getElementById("output");
let out = [];
let array = JSON.parse(input);
let done = false;
	while(!done){
		done = true;
		for(let i = 1; i < array.length; i++){
			if(array[i-1] > array[i]){
				done = false;
				let tmp = array[i-1];
				array[i-1] = array[i];
                array[i] = tmp;
            }
        }
    }
    console.log(array);
    for(i = 0; i < array.length ; i++){
        out[i] = array[i];
    }
    console.log(out);
    output.innerText = out;
}