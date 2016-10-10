//to parse data to {DE: 1, HK: 1, NL: 1, UK: 1, TW: 1};
//the first,big task

graduates={};

graduates.read_static=function(){
var data="greenify:DE\ndaviddao:HK\nmhelvens:NL\ntimruffles:UK\niriscshih:TW\n\n";
return graduates.parse(data);
};

graduates.parse=function(data){
var sp=data.split('\n');
var count=0;


var final={};
for(var i=0;i<sp.length;i++){
if(sp[i]==''){
	continue;
}

else{
	var repeat=0;
	var sp1=sp[i].split(":");
	prop=sp1[1];
	
	for(var property in final){
		if(sp1[1]==property){
          repeat=repeat+1;
          var prop=property;
		}
	}
    final[prop]=repeat+1;
   count=count+1;
}
}

return final;
}
module.exports=graduates;