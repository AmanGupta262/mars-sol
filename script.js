/// <reference path="../jquery-3.5.1.js" />
$('#fetch').on('click', function () {
    var solInput = $('#sol');
    var pageInput = $('#page');

    var sol = solInput.val();
    var page = pageInput.val();
    $('.result').html("");

    if (sol === "" || page === ""){
        alert("Enter valid data")
    }

    $.ajax({
        url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method: 'get',
        success: function (data) {
            var photos = data.photos;
            photos.forEach(e => {
                $('.result').append(`<img src="${e.img_src}" alt="${e.id}">`);
            });
        },
        data: {
            sol: sol,
            page: page,
            api_key: 'DEMO_KEY'
        }

    });
});