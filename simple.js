// the first testcase
var assert=require("chai").assert;
var tutorial=require("../");

describe('Graduates',function(){
	describe('parse',function(){
		it('should return match with default object',function(){
			var dummyObj={DE:1,HK:1,NL:1,UK:1,TW:1};
			assert.deepEqual(tutorial.read_static(),dummyObj);
		});
	});
});