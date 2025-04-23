document.querySelector("h1.custname").style.backgroundColor = "pink";

function bulkCheck(){
	var selected_food = document.getElementById("food")
	var selected_quantity = document.getElementById("Quantity")
	if(selected_quantity.options[selected_quantity.selectedIndex].text == "Bulk Order")
	{
		 
			const label = document.createElement("label");
			label.setAttribute("for", "Quantitytext");
			label.innerHTML = "Type in the No. of Orders:   ";
			label.setAttribute("id", "QuantityID");
			document.body.appendChild(label);
			const input = document.createElement("input");
    		input.setAttribute("type", "text");
    		input.setAttribute("id", "Quantitytext");
    		document.body.appendChild(input);
    		document.getElementById('bulkconfirm').disabled = true;
    		document.getElementById("bulkconfirm").innerHTML = "Done!";	
    		document.getElementById("flag").innerHTML = "bulkbro";
  }
	else{
		document.getElementById("bulkconfirm").innerHTML = "Done!";
		document.getElementById("quantities").value = selected_quantity.options[selected_quantity.selectedIndex].text;
	}
	document.getElementById("name").value = selected_food.options[selected_food.selectedIndex].text;
	
  
};
          
function countbulk(){
	if(selected_quantity.options[selected_quantity.selectedIndex].text == "Bulk Order"){
		
	document.getElementById("quantities").value = Quantitytext;	
	}
	
}   
    
