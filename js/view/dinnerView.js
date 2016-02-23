
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

function dinnerDishes2(dishes, model, dinnerDishes) {

	var totalCost = 0;
	var html = "";

	for (var i = 0; i < dishes.length; i++) {

		html += '<div class="col-md-3" id="dish">';
			html += '<div class="image-box">';
				html += '<img src="' + "images/" + dishes[i].image + '">';
				html += '<div class="desc">';
					html += '<p id="name">' + dishes[i].name + '</p>';
				html += '</div>';
			html += '</div>';
			html += '<p id="cost">' + model.getTotalDishPrice(dishes[i].id) + ' SEK</p>';
		html += '</div>';

		totalCost += model.getTotalDishPrice(dishes[i].id);
	}

	html += '<div id="totalCost" class="col-md-3">';
		html += '<p>Total:</p><p id="cost">' + totalCost + ' SEK</p>';
	html += '</div>';

	dinnerDishes.html(html);

	return totalCost;
}


var DinnerView = function (container, model) {

	model.addObserver(this);
	this.container = container;

	var dishes = model.getFullMenu();
	this.dinnerDishes = this.container.find("#dinnerDishes");
	dinnerDishes2(dishes, model, this.dinnerDishes);
	this.printRecipe = this.container.find("#printFullRecipe");


	this.update = function(obj) {
		// update data which was fetched from model
	}
}




