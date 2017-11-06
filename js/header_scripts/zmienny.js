function otwarcie() {    
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentDay = currentDate.getDay();
    var element = document.querySelector('#test');

    if (currentHour >= 0 && currentHour < 15) {
            //aktualny czas
            var ActualMinutes = currentDate.getMinutes();

            //czas do którego zmierzamy
            var DestinationHour = 14;
            //obliczanie pozostałego czasu
            var DifferenceHour = (DestinationHour - currentHour);
            var DifferenceMinutes = (60 - ActualMinutes);
            //wypisanie wartości
            var tekst = 'Do otwarcia pizzeri pozostało '
                +DifferenceHour+ ' godzin i '
                +DifferenceMinutes+ ' minut ';
            //użycie elementu
            var element = document.getElementById('test');
            element.innerHTML = tekst;     
    };

    if (currentHour >= 15 && currentHour <= 21) element.innerHTML = 'Zamów pizze już teraz! Nr tel: <a href="tel:326451506">326451506</a>';
    
    if (currentHour >= 22 && currentHour <= 23 ) {
            //aktualny czas
            var ActualMinutes = currentDate.getMinutes();

            //obliczanie pozostałego czasu
            var DifferenceHour = (24 - currentHour + 14);
            var DifferenceMinutes = (60 - ActualMinutes);
            //wypisanie wartości
            var tekst = 'Do otwarcia pizzeri pozostało '
                +DifferenceHour+ ' godzin i '
                +DifferenceMinutes+ ' minut ';
            //użycie elementu
            var element = document.getElementById('test');
            element.innerHTML = tekst;     
    };
setInterval("otwarcie();", 40000); 
};


function init(){
    otwarcie();
    console.log( window.innerWidth )
}