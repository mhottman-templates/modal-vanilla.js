'use strict';

(function() {

    var btn = document.getElementById('modal-window');
        btn.addEventListener('click', openModalWindow);

    function openModalWindow(e) {
        var child = document.createElement('div');
            child.className = "inside";
        var text = document.createElement('h1');
            text.className = "inside-text";
            text.innerHTML = "Hello Modal";
        child.appendChild(text);

        //create modal instance and pass in child elements
            //can be whatever, styled however you want
        var modal = new Modal(child, true);
        modal.show(); //open the modal window
    }

})();
