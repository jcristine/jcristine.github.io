function render() {

    fetch('bfm.json')

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            appendData(data);
        })

        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendData(data) {

    var mainContainer = document.getElementById("myData");

    data.groupedItineraryResponse.itineraryGroups.forEach(group => {

        group.itineraries.forEach(itinerary => {

            itinerary.legs.forEach(leg => {

                data.groupedItineraryResponse.legDescs[leg.ref - 1].schedules.forEach(schedule => {

                    var div = document.createElement("div");

                    div.innerHTML = 
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].departure.airport + '-' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].arrival.airport + ' ' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].carrier.operating + ' ' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].carrier.operatingFlightNumber;

                    mainContainer.appendChild(div);
                    
                });

            });

            var div = document.createElement("div");
            div.innerHTML = '\n';
            mainContainer.appendChild(div);

        });

    });

}
