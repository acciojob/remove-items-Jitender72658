//your JS code here. If required.
function remove() {
let color = document.getElementsByTagName('select');
let removeColor = color[0].value;
let options = document.getElementsByTagName('option');
console.log(removeColor);
for(let i = 0;i<options.length;i++){
	let currColor = options[i].value;
    console.log(currColor);
	if(currColor==removeColor){
        let deleteNode = options[i];
		deleteNode.remove();
	}
 }
}
