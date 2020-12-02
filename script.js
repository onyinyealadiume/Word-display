function backgr(){
var backimg = ["cat.jpg","dog.jpg","pig.jpg","cow.jpg", "cheetah.jpg"]; 
var randimg = Math.floor(Math.random()*5);
document.body.background = backimg[randimg];
}

$("#search").on("click", searchImages);

async function searchImages(){
  let keyword = $("#keyword").val();
  let orientation = $("#orientation").val();
  let url = `https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=${keyword}&orientation=${orientation}`; //we would use the template literal 

  let response =  await fetch(url);
  let data = await response.json();
  
  let shuffleImages = _.shuffle(data.hits);
  
  $("#images").html("");
  for (var i = 0; i < 5; i++){
    $("#images").append(`<p>${shuffleImages[i].likes}</p> <img width="150" src="${shuffleImages[i].webformatURL}">`);
  }

  async function getData(url){
   let response = await fetch(url);
   let data = await response.json();
   return data;
  }
}





