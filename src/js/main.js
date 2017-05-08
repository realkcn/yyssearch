require('../css/main.css');
var enemy_info = require('./data.json');

function createDiv(parent, className, info, id) {
    var element = document.createElement('div');
    var divpanel = parent.appendChild(element);
    divpanel.className = className
    divpanel.innerHTML = info
    divpanel.setAttribute('id', id);
    return divpanel;
}

for (var i = 0; i < enemy_info.length; i++) {
    var group = enemy_info[i];
    var divpanel = createDiv(document.body, 'div-group', group.name, 'group' + i);

    for (var j = 0; j < group.wars.length; j++) {
        var war = group.wars[j];
        var grouppanel = createDiv(divpanel, 'div-war', war.name, 'group-' + i + 'war-' + j);

        for (var k = 0; k < war.rounds.length; k++) {
            var round = war.rounds[k];
            if (war.rounds.length > 1) {
                var roundpanel = createDiv(grouppanel, 'div-round', round.index, 'group-' + i + 'war-' + j + 'round-' + k);
            }
        }
    }
}