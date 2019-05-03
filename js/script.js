
// 1: article-select add an event for .on('change')
// 2: when it does change try to get the value
// 3: use the value in the .ajax request e.g. " https://api.nytimes.com/svc/topstories/v2/" + variableVaule + ".json?api-key=0rDLQOWB9Rgp7vmdbqIgHe7T5j6S389t"
// 4: nest the ajax request inside the .on("change")

$('#article-select').on('change', function () {
    const selectedCategory = $(this).val();
    if (selectedCategory !== '') {

        $.ajax({
            method: 'get',
            url: " https://api.nytimes.com/svc/topstories/v2/" + selectedCategory + ".json?api-key=0rDLQOWB9Rgp7vmdbqIgHe7T5j6S389t"
        })
            .done(function (data) {
                 $(".newsarticles").empty();
                $.each(data.results, function (index, article) {
                    const content = article.abstract;
                    const title = article.title;
                    const image = article.multimedia[4].url;
                    const url = article.url;
                    
                    $(".newsarticles").append(`<a href ="${url}"><p>${content}</p><p>${title}</p><p><img src ="${image}"/></p></a>`);


                });
            });
    }
});



