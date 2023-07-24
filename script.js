//your JS code here. If required.
function remove() {
let color = document.getElementsByTagName('select');
let removeColor = color[0].value;
let options = document.getElementsByTagName('option');
for(let i = 0;i<options.length;i++){
	let currColor = options[i].value;
	if(currColor==removeColor){
        let deleteNode = options[i];
		deleteNode.remove();
	}
 }
}
