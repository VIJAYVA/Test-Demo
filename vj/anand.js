var request = new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(`authorname:${data.authors} bookisbn:${data.isbn}  nop:${data.numberOfPages} publisher:${data.publisher}`);
}