var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    for(i=0;i<data.length;i++)
    console.log(`counries name:${data[i].name} region:${data[i].region} sub region:${data[i].subregion} population:${data[i].population}`);
}