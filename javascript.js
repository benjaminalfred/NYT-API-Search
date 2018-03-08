$('#submit').on('click', function() {
    console.log('working')
    event.preventDefault()
    var search = $('#searchTerm').val()
    var records = $('#records').val()
    var start = $('#startYear').val()
    var end = $('#endYear').val()
    var articleCounter = 0

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "441da6ecab924fd9be1c14517735b7cf",
        'q:': search,
    
        'begin_date': start,
        'end_date': end,
    })

    $.ajax({
        url: url,
        method: "GET"

    }).then(function(response) {
        var docs = response.response.docs
        for (var i = 0; i < records; i++) {
            articleCounter++
            var headline = docs[i].headline.main
            var source = docs[i].source

            $('#results').append(`<p><b>${articleCounter}. ${headline}</b></p><p>&nbsp;&nbsp; ${source}</p> <hr> `)
        }
    })

});