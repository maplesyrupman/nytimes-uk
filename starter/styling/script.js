

const form = $("form")

form.on("submit", function(event){
    event.preventDefault()
    let searchTerm = $("#searchTerm").val()

    let numberOfRecords = $("#numberOfRecords").val()
    

    let StartYear = $("#StartYear").val()
    let EndYear = $("#EndYear").val()
    
    console.log(searchTerm, numberOfRecords, StartYear, EndYear)

    let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + StartYear + "&end_date=" + EndYear + "&page=" + numberOfRecords + "&api-key=d7WIF7LbbYnZ3jiQo7OW5MFFhYAavKQD"

    $.ajax({url : queryUrl}).then(function(response){
        console.log(response)

        response.response.docs.forEach(element => {
            $("#topArticles").append($("<h2>").text(element.headline.main).append($("<p>").text(element.abstract)))
        });
    })
})