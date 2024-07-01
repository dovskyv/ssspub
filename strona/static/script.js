$(document).ready(function() {
    $('#showContentLink').click(function(event) {
        event.preventDefault(); // Zatrzymuje domyślne działanie linku
        $('#initialContent').hide(); // Ukrywa napis "Kliknij aby wyświetlić"
        $('#mainContent').show();   // Pokazuje resztę zawartości strony
    });
});