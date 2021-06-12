// cp -v ~/usb2tb/html/sabre/* . && git add . -v && git commit -m "na" -v && git push -v

function render() {

    fetch('sabre.json')

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            appendSabreData(data);
        })

        .catch(function (err) {
            console.log('error: ' + err);
        });

        fetch('flyline.json')

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            appendFlylineData(data);
        })

        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendSabreData(data) {

    var sabre = document.getElementById("sabre");

    var div = document.createElement("div");
    div.classList.add('fare-header');
    div.innerHTML = 'SABRE';
    sabre.appendChild(div);

    var fc = 0;
    data.groupedItineraryResponse.itineraryGroups.forEach(group => {

        group.itineraries.forEach(itinerary => {

            var div = document.createElement("div");
            div.classList.add('fare');
            div.innerHTML = ++fc + ' - ' + itinerary.pricingInformation[0].fare.totalFare.totalPrice.toFixed(2) + '<br />';
            sabre.appendChild(div);

            itinerary.legs.forEach(leg => {

                data.groupedItineraryResponse.legDescs[leg.ref - 1].schedules.forEach(schedule => {

                    div.innerHTML +=
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].departure.airport + '-' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].arrival.airport + ' ' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].carrier.marketing + ' ' +
                        data.groupedItineraryResponse.scheduleDescs[schedule.ref - 1].carrier.marketingFlightNumber + '<br />';

                    sabre.appendChild(div);
                    
                });

            });

        });

    });
}

function appendFlylineData(data) {

    var flyline = document.getElementById("flyline");

    var div = document.createElement("div");
    div.classList.add('fare-header');
    div.innerHTML = 'FLYLINE';
    flyline.appendChild(div);

    var fc = 0;
    data.offers.forEach(offer => {

        var div = document.createElement("div");
        div.classList.add('fare');

        div.innerHTML = ++fc + ' - ' + Number(offer.total_amount).toFixed(2) + '<br />';

        offer.slices.forEach(slice => {
            
            slice.segments.forEach(segment => {

                div.innerHTML +=
                    segment.origin + '-' +
                    segment.destination + ' ' +
                    segment.marketing_carrier + ' ' +
                    segment.marketing_carrier_flight_number + '<br />';

            });

        });

        flyline.appendChild(div);
    });
}