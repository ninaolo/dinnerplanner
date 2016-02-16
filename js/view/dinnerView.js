
function dinnerDishes(dishes, model){

	var totalCost = 0 ;

	for (var i = 0; i< dishes.length; i++){
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
		cost.id="cost"
		cost.className="col-md-3"
		cost.innerHTML= model.getTotalDishPrice(dishes[i].id) +" SEK";
		totalCost += model.getTotalDishPrice(dishes[i].id);

		nameDiv.appendChild(name);
		div.appendChild(img);
		div.appendChild(nameDiv);
		dishDiv.appendChild(div);

		dishDiv.appendChild(cost)

		document.getElementById('dinnerDishes').appendChild(dishDiv);

	}
	return totalCost;
 
}
/*
<div class="col-md-3">
	<div class='image-box'>
		<img src='images/dishes[i].image' />
		<div class='desc'><p> dishes[i].name</p></div>
	</div>
	<p>description</p>
</div>
*/

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
		container.find("#totalCost").append("<p>"+dinnerDishes(dishes, model)+" SEK</p>");
	});

	
}