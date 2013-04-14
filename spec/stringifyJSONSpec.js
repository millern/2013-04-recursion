// test cases are described in fixtures.js
describe("stringifyJSON", function(){
  it("should match the result of calling JSON.stringify", function(){
    console.log("--validObjects--");
    validObjects.forEach(function(obj, thisArg){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
      console.log(thisArg + " -- " +  _.isEqual(result, expected));

    });
    console.log("--weirdObjects--");
    weirdObjects.forEach(function(obj, thisArg){
      
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
      console.log(thisArg + " -- " +  _.isEqual(result, expected));
    });
    console.log("--extraCreditStrings--");
    extraCreditStrings.forEach(function(obj,thisArg){
      
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
      console.log(thisArg + " -- " +  _.isEqual(result, expected));
    });

  });

});