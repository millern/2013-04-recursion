// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  switch (typeof(obj))
  {
  	case "string":
  		return '\"'+obj+'\"';
  		break;

  	case "number":
  		return obj.toString();
  		break;
  	case "boolean":
  		return obj.toString();
  		break;
  	case "undefined":
  		return '';
  		break;
  	case "function":
  		return undefined
  		break;
  	case "object":
  		//check for array since javascript does not have 'array' type
  		if (obj==null) {
  			return "null";
  		} else if (Array.isArray(obj)){
  		var nary = obj;
  		var rtnString = '';
  			for (var i = 0; i<nary.length;i++){
  				if (i > 0){
  					rtnString += ',';
  				}
  				rtnString += stringifyJSON(nary[i]);
  			}
  		return "["+ rtnString +"]";
  		} else {
  			var nobject = obj;
  			rtnString = '';
  			var index = 0;
  			for (var i in nobject){
  				
  				var objVal = stringifyJSON(nobject[i]);
  				if (objVal != '' && objVal != undefined) {
	  				if (index>0) {
	  					rtnString += ',';
	  				}	
  				rtnString += "\""+i+"\"";
  				rtnString += ':';
  				rtnString += objVal;
  				}
  				index++;
  			}
  		return "{"+rtnString+"}";
  		}
  		break;

  	default: 
  		break;
  }

};
