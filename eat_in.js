$(document).ready(function() {

    $('#food-button').click(function() {
        //get the ingredients
        var recipe = $('.food-ingredient-in').val();

        //get the data based off ingredients entered
        getFoodIngredients(recipe);

    });


});



function getFoodIngredients(recipe) {


    $.getJSON('https://api.edamam.com/search', {
        app_id: 'df1fa5c2',
        app_key: '079ed3ae571dd61db2744f4c50215cef',
        q: recipe,
    }, function(recipeData) {
        console.log(recipeData);
        ///////////////////////
        $('.recipe-results-out').text("")
        for (var i = 0; i < recipeData.hits.length; i++) {
            var recipeHtml = "<div class='recipeResultsCSS'>" + recipeData.hits[i].recipe.label + "<br>" +
                recipeData.hits[i].recipe.source + "<br>" +
                "<div class='recipeImg'> <img src=" + recipeData.hits[i].recipe.image + "> <span> </span>" + "</div>" +
                "<div class='recipeUrlCSS'>" + recipeData.hits[i].recipe.url + "<br>" + "</div> </div>";
            $('.recipe-results-out').append(recipeHtml);

            var recipe_url = recipeData.hits[i].recipe.url;
            $(".recipeImg").hover(function() {
                $(this).css("cursor", "pointer");
                $(this).click(function() {
                    $(this).attr(recipe_url);
                    window.open(recipe_url, '_blank');
                });
            }, function() {
                $(this).find("span").empty();
            });



            // $('.recipe-results-out').append(recipeData.hits[i].recipe.label + "<br>");
            // $('.recipe-results-out').append(recipeData.hits[i].recipe.url + "<br>");
            // $('.recipe-results-out').append(recipeData.hits[i].recipe.source + "<br>");
            // $('.recipe-results-out').append("<img src=" + recipeData.hits[i].recipe.image + ">");
        }
        //var imagelink = recipeData.hits[0].recipe.image;
        //var description = recipeData.hits[0].recipe.label;

        //$('.recipe-results-out').html(recipeData.hits[0].recipe);

    })
};


function mylinkfunction(e) {

    window.location.href = "#recipe-results";

    /* need to stop the form sending of the form */

    //e.preventDefault();
    //e.stopPropagation(); 

};