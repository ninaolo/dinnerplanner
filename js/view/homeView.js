//ExampleView Object constructor
var HomeView = function (container, model) {

	container.load("fragments/home.html", function() {
		this.testing = container.find("#testing");
		this.testing.html("<p>TESTING</p>");
	});
	

	
}