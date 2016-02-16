$(document).ready(function() {
    		});

function dinnerDishes(dishes,model){

	var totalCost = 0 ;

	for (var i = 0; i< dishes.length;1++){
		var dishDiv = document.createElement('div');
		dishDiv.className = "dish";

		var div = document.createElement('div');
		div.className = 'image-box';

		var img = document.createElement('img');
		img.src= "images/"+dishes[i].image;

		var nameDiv = document.createElement('div');
		nameDiv.className = "desc";
		var name = document.createElement('p');
		name.innerHTML= dishes[i].name;

		var cost = document.createElement('p');
		cost.innerHTML= model.getTotalDishPrice(dishes[i].id) +" SEK";
		totalCost += cost;

		nameDiv.appendChild(name);
		div.appendChild(img);
		div.appendChild(nameDiv);
		dishDiv.appendChild(div);

		dishDiv.appendChild(cost)

		document.getElementById('dinnerDishes').appendChild(dishDiv);

	}
	return totalCost;
 
}


function showSearchResults(dishes) {
	html = "<div class='row'>";

	for (var i = 0; i < dishes.length; i++) {
		html += "<div class='col-md-3'>";
		html += "<div class='image-box'>";
		html += "<img src='images/" + dishes[i].image + "' />";
		html += "<div class='desc'><p>" + dishes[i].name + "</p></div>"
		html += "</div>";
		if (dishes[i].description.length > 90) {
			html += "<p>" + dishes[i].description.substr(0,90) + "...</p>";
		} else {
			html += "<p>" + dishes[i].description + "</p>"
		}
		html += "</div>";
	}
	html += "</div>";
	return html;
}


var DinnerView = function (container, model) {

	container.load("fragments/dinner.html", function() {

	var dishes = model.getFullMenu();
	this.dinnerDishes = container.find("#dinnerDishes");
	container.find(".totalCost").innerHTML("<p>"+dinnerDishes(dishes)+" SEK</p>"));
	});

	
}