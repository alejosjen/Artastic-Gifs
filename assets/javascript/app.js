// API to Giphy: uuAMa4TeItKBBDdRzNb2adG75qTgblof, not a production key
//https://api.giphy.com/v1/gifs/search?api_key=uuAMa4TeItKBBDdRzNb2adG75qTgblof&q=art&limit=10&offset=0&rating=G&lang=en


$(function () {
    var topics = ["art", "art-history", "fine-arts", "architecture", "color", "comics", "modern-art", "sculpture", "painting", "ceramics", "drawing", "watercolor", "chalk-drawing", "abstract-art", "landscape", "photography", "still-life", "mixing-paint", "street-art", "nature-art", "mosaic-art"];

    $.each(topics, function (index, value) {
        $(".search-terms").append('<button type="button" class="topic-button btn btn-dark btn-sm m-1">' + value + '</button>');
        console.log(value);
    });
})

var apiKey = "uuAMa4TeItKBBDdRzNb2adG75qTgblof"
$(document).ready(function () {
    $('button').on("click", function () {
        var searchTerm = $(this).text();
        var url = "https://api.giphy.com/v1/gifs/search?" +
            `api_key=${apiKey}` +
            `&q=${searchTerm}` +
            `&limit=10` +
            `&rating=G`+
            `&lang=en`;

        $.ajax({
            url: url,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            $(".search-results").text(JSON.stringify(response));
        })
    });
})





