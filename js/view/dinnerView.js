
function dinnerDishes(dishes, model){

	var totalCost = 0;

	for (var i = 0; i < dishes.length; i++) {
		var dishDiv = document.createElement('div');
		dishDiv.className ="col-md-3";
		dishDiv.id="dish";

		var div = document.createElement('div');
		div.className ="image-box";

		var img = document.createElement('img');
		img.src="images/"+dishes[i].image;

		var nameDiv = document.createElement('div');
		nameDiv.className ="desc";
		var name = document.createElement('p');
		name.innerHTML= dishes[i].name;

		var cost = document.createElement('p');
		cost.id="cost";
		cost.className="row";
		cost.innerHTML= model.getTotalDishPrice(dishes[i].id) +" SEK";
		totalCost += model.getTotalDishPrice(dishes[i].id);

		nameDiv.appendChild(name);
		div.appendChild(img);
		div.appendChild(nameDiv);
		dishDiv.appendChild(div);

		dishDiv.appendChild(cost);

		document.getElementById('dinnerDishes').appendChild(dishDiv);

	}
	return totalCost;
 
}


var DinnerView = function (container, model) {

	container.load("fragments/dinner.html", function() {
		var dishes = model.getFullMenu();
		this.dinnerDishes = container.find("#dinnerDishes");
		container.find("#cost").html(dinnerDishes(dishes, model)+" SEK");
	});

	
}