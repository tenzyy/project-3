
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
                const dataFiltered = data.results.filter(function(article) {
                    return article.multimedia[4] !==  undefined;
                });
               
                const dataFilterSliced = dataFiltered.slice(0,12);

                // filter data and filter data. results 
                // get rid of other multimedia urls that don't exist 

                //  $(".newsarticles").empty();
                $.each(dataFilterSliced, function (index, article) {
                    const content = article.abstract;
                    const title = article.title;
                    const image = article.multimedia[4].url;
                    const url = article.url;
                   
                    
                    $(".newsarticles").append(`<a href ="${url}">
                    <p class ="content">${content}</p></div>
                    <title>${title}</title>
                    <img class= "articleimage" src = "${image}"/></a>`);


                
                
                });
            });
    }
});



