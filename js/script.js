$(function() {
  $("#article-select").on("change", function() {
    const selectedCategory = $(this).val();
    if (selectedCategory == "nooption") {
      $(".newsarticles").html("");
    } else if (selectedCategory !== "") {
      $(".loader").show();

      $.ajax({
        method: "get",
        url:
          " https://api.nytimes.com/svc/topstories/v2/" +
          selectedCategory +
          ".json?api-key=0rDLQOWB9Rgp7vmdbqIgHe7T5j6S389t"
      })

        .done(function(data) {
          $(".loader").hide(data);
          $(".newsarticles").html("");
          const dataFiltered = data.results
            .filter(function(article) {
              return article.multimedia[4] !== undefined;
            })
            .slice(0, 12);
          $.each(dataFiltered, function(index, article) {
            const content = article.abstract;
            const title = article.title;
            const image = article.multimedia[4].url;
            const url = article.url;

            $(
              ".newsarticles"
            ).append(`<a href ="${url}"><img class= "articleimage" src = "${image}"/>
                    <p class ="content">${content}</p>
                    <title>${title}</title>
                    </a>`);
          });
        })
        .fail(function() {
          $(".newsarticles").append("Sorry there was an error.");
        });
    }
  });
});
