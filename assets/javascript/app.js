// API to Giphy: uuAMa4TeItKBBDdRzNb2adG75qTgblof, not a production key
//https://api.giphy.com/v1/gifs/search?api_key=uuAMa4TeItKBBDdRzNb2adG75qTgblof&q=art&limit=10&offset=0&rating=G&lang=en


$(function (){
   var topics = ["art", "art-history", "fine-arts", "architecture", "color", "comics", "modern-art", "sculpture", "painting", "ceramics", "drawing", "watercolor", "chalk-drawing", "abstract-art", "landscape", "photography", "still-life", "mixing-paint", "street-art", "nature-art", "mosaic-art"];

    $.each(topics, function (index, value){
        var topicButtons = topics;
        $(".search-terms").append('<button>' +value+ '</button>');
        console.log(value);
    }); 
})

