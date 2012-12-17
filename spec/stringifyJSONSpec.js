// test cases are described in fixtures.js
describe("stringify", function(){
  it("should match the result of calling JSON.stringify", function(){
    validStrings.forEach(function(test){
      var obj = JSON.parse(test);
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });
  })
});