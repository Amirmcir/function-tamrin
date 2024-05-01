tamarin dars mabahes vizh ostad mohammadzadeh

#function



let arrayforzarbdar = [63 , 11 , 77 , 91]
function zarbdar(vorodi){
	for(let i = 0 ; i < vorodi.length; i++){
		vorodi[i] = vorodi[i] * 2
	}
	console.log("Zarbdar 2 Shode : " , vorodi);
}
zarbdar(arrayforzarbdar)

////////////////////////////////////////////////////

let saniehbeminhour = 7200;
function sectominandmin(vorodi){
	console.log("minute : " , vorodi / 60);
	console.log("hour : " , vorodi / 3600);
}
sectominandmin(saniehbeminhour)
