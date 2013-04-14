// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  	var rtnArray = [];
  	var topNode = document.body;
  	helperFunction(className,topNode);
  	
	return rtnArray;



	function helperFunction(className,upNode) {


		var nodes = upNode.childNodes;

  		for (var i = 0; i<nodes.length; i++){

  			var childNodes = nodes[i].childNodes;

	  		if (childNodes.length > 0) {
	  			helperFunction(className,nodes[i]);
	  		}

	  		var elementClass = nodes[i].classList;

	  		for (var j in elementClass){
	  			if (elementClass[j] == className) {
	  			rtnArray.push(nodes[i]);
	  		}
	  		}

  		}


	}
};
