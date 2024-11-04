

function add(){
    var text = document.getElementById('text');
    var newListItem = document.createElement('li');

    newListItem.textContent = text;

    document.getElementById('list').appendChild(newListItem);

    document.getElementById('text') = ''

}