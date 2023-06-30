//your JS code here. If required.
async function callme(){
	const message= document.getElementById("text").value;
	const delay= parseInt(document.getElementById("delay").value);
	await delayfunc(delay,message);
	 
	
}
function delayfunc(delay,message) {
  return new Promise(resolve=>{
	  
	  setTimeout(resolve,delay)
	  document.getElementById("output").innerText=message;
  })
}
 document.getElementById("btn").addEventListener("click",callme);