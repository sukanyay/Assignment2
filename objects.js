<html>
  <head>
	<title>Home Work </title>
	 </head>
	   <body>
		<script>
			var carDetails = {
				noOfTyres: 4,
				noOfGears: 5,
				comfort: function () {
					document.write("It has a high level of comfort");
				}
			}

			var benzCar = {
				color: "black",
				manufacturer: "Benz",
				drivingWay: function() {
					document.write("it drives very smooth.");
				}
			};

			var audiCar = {
				color: "White",
				manufacturer: "Audi",
				drivingWay: function() {
					document.write("it drives very Fast.");
				}
			}

			benzCar.__proto__ = carDetails;
			audiCar.__proto__ = carDetails;


			function showDetails(carObj) {
				document.write("model name is "+ carObj.manufacturer);
				document.write("noOfGears "+ carObj.noOfGears);
				document.write("color " + carObj.color);
				carObj.comfort();
				carObj.drivingWay();
			} 

			showDetails(benzCar);
			showDetails(audiCar);
//Constructor
function watch(name,color,warranty,cost){
	this.branddName="name";
	this.color="color";
	this.warranty="warranty";
	this.cost="cost";
}
var watch1=new watch("fastTrack","black","oneYear",250);
var watch2=new watch("bulova","brown","twoYear",334);
var watch3=new watch("rolex","white","threeYear",500);

document.write("watch1" +"watch1.name is" + "watch2" + "watch2.name is" );

//Prototype
function watch(name,color,warranty,cost){
	this.brandName="name";
	this.color="color";
	this.warranty="warranty";
	this.cost="cost";
}
watch.Prototype.showSpecs=function(){
	document.write("watch1" +"watch1.name is" + "watch2" + "watch2.name is" );
}
var watch1=new watch("fastTrack","black","oneYear",250);
var watch2=new watch("bulova","brown","twoYear",334);
var watch2=new watch("rolex","white","threeYear",500);

watch1.showSpecs();
watch2.showSpecs();
watch3.showSpecs();




//Event Handling
<div id="test"> </div>
 function output(){
 	document.write("Hello world")
 }

document.queryselector('#test').addEventListener("click",output);





		</script>
	</body>
</html>