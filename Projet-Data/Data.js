var map = document.querySelector('#map');
var formes = map.querySelectorAll('.map-image a'); /*je sélection tous les liens (formes géométrique) de mon svg carte du monde */
var liens = map.querySelectorAll('.map-listPays a'); /*je sélection tous les liens dans maliste des pays */

var activeArea = function(id) {
    map.querySelectorAll('.ACTIF').forEach(function(item) {
        item.classList.remove('ACTIF')
    })
    if (id !== undefined) { /* si id est différent d'indéfini j'ajoute à es class list et region la class ACTIF*/ 
        document.querySelector('#list-' + id).classList.add('ACTIF');
    document.querySelector('#region-' + id).classList.add('ACTIF');
    }
    
}

formes.forEach(function(formes) {
    formes.addEventListener('mouseenter', function() {
        var id = this.id.replace('region-', '');
        activeArea(id)
    })
});

liens.forEach(function(liens) {
    liens.addEventListener('mouseenter', function() {
        var id = this.id.replace('list-', '');
        activeArea(id)
    })
})

map.addEventListener('mouseleave', function () {
    activeArea();
})