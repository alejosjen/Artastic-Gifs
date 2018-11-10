// API to Giphy: uuAMa4TeItKBBDdRzNb2adG75qTgblof, not a production key
//https://api.giphy.com/v1/gifs/search?api_key=uuAMa4TeItKBBDdRzNb2adG75qTgblof&q=art&limit=10&offset=0&rating=G&lang=en
var topics = ["fine-arts", "architecture", "color", "comics", "sculpture", "painting", "ceramics", "drawing", "watercolor", "chalk-drawing", "abstract-art", "landscape", "photography", "still-life", "mixing-paint", "street-art", "nature-art", "mosaic-art"];

document.addEventListener('DOMContentLoaded', function () {
    function clear() {
        $(".search-results").empty()
    }

    clear();

    $(function () {
        function createButtons() {
            $.each(topics, function (index, value) {
                $(".search-terms").append('<button type="button" class="topic-button btn btn-dark btn-sm m-1">' + value + '</button>');
                console.log(value);
            });
        }

        $('form').keypress(function (event) {
            return event.keyCode != 13;
        });

        createButtons();


        $('#submit').on('click', function (event) {
            $(".search-terms").empty()
            var submitButton = $('#art-input').val()

            if (topics.indexOf(submitButton) === -1) {
                topics.push(submitButton);
            } else {
                alert('Term exists.');
            }

            createButtons();
            

/*             event.preventDefault();
 */            console.log(topics);
        });

        var apiKey = "uuAMa4TeItKBBDdRzNb2adG75qTgblof"
        $(document).on("click", '.topic-button', function (event) {

            var searchTerm = $(this).text();
            var url = "https://api.giphy.com/v1/gifs/search?" +
                `api_key=${apiKey}` +
                `&q=${searchTerm}` +
                `&limit=10` +
                `&rating=G` +
                `&lang=en`;

            $.ajax({
                url: url,
                method: "GET",
            }).then(function (response) {
                console.log(response);
                clear();

                response.data.forEach(function (data, index) {
                    var imageStill = response.data[index].images.original_still.url;
                    var imageOriginal = response.data[index].images.original.url;
                    var imgResult = $(`
                        <div class = "imageResult">
                            <img class="gif w-75" src="${imageStill}" alt="Static Image" data-src="${imageOriginal}"/>
                            <p class="text-light"> Rating: ${response.data[index].rating} </p>
                        </div>
                    `)
                    var img = imgResult.find('.gif')

                    imgResult.appendTo(".search-results");

                    img.on("click", function () {
                        if (img.attr('src') == imageStill) {
                            img.attr('src', imageOriginal)
                        } else if (img.attr('src') == imageOriginal) {
                            img.attr('src', imageStill)
                        }
                    });

                });
            });
/*         event.preventDefault();
 */        });

    });
});