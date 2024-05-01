let arrayforzarbdar = [63 , 11 , 77 , 91]
function zarbdar(vorodi){
	for(let i = 0 ; i < vorodi.length; i++){
		vorodi[i] = vorodi[i] * 2
	}
	console.log("Zarbdar 2 Shode : " , vorodi);
}

zarbdar(arrayforzarbdar)

/***************************************/

let saniehbeminhour = 7200;
function sectominandmin(vorodi){
	console.log("minute : " , vorodi / 60);
	console.log("hour : " , vorodi / 3600);
}
sectominandmin(saniehbeminhour)

/*****************************************/

let mianginarray = [17 , 2210 , 350 , 140 , 19]
function miangin(vorodi){
	let total = 0;
	for (let i = 0; i < vorodi.length; i++) {
		total += vorodi[i];
	}
	console.log("MianGin : " , total / vorodi.length);
}
miangin(mianginarray)

/***********************************/

let ziadkamarray = [65 , 32 , 612 , 88 , 333 , 65 , 87]
function minmax(vorodi){
	let max = 0;
	for(let i = 0 ; i < vorodi.length; i++){
		if(vorodi[i] > max){
			max = vorodi[i]
		}
	}
	console.log("BozorgTarin : " , max);

	for(let i = 0 ; i < vorodi.length; i++){
		if(vorodi[i] < max){
			max = vorodi[i]
		}
	}
	console.log("KocheckTarin : " , max);
}
minmax(ziadkamarray)