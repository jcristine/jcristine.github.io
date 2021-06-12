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

// cp -v ~/usb2tb/html/sabre/* . && git add . -v && git commit -m "na" -v && git push -v

function appendData(data) {

    var sabre = document.getElementById("sabre");

    data.groupedItineraryResponse.itineraryGroups.forEach(group => {

        group.itineraries.forEach(itinerary => {

            var div = document.createElement("div");
            div.classList.add('fare');
            div.innerHTML = itinerary.pricingInformation[0].fare.totalFare.totalPrice.toFixed(2) + '<br />';
            sabre.appendChild(div);

            itinerary.legs.forEach(leg => {

                data.groupedItineraryResponse.legDescs[leg.ref - 1].schedules.forEach(schedule => {

                    //var div = document.createElement("div");

                    div.innerHTML +=
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].departure.airport + '-' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].arrival.airport + ' ' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].carrier.operating + ' ' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].carrier.operatingFlightNumber + '<br />';

                    sabre.appendChild(div);
                    
                });

            });

            //var div = document.createElement("div");
            //div.innerHTML += '\n';
            sabre.appendChild(div);

        });

    });

    var flyline = document.getElementById("flyline");
    var div = document.createElement("div");
    div.classList.add('fare');
    div.innerHTML = 'TEST'
    flyline.appendChild(div);

}
