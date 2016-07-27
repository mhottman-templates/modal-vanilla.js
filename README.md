##Modal Window in Vanilla JS
###To Use
1. create child elements with js
    * var child = document.createElement('tagname');
        * add elements to child
2. create instance of modal
    * var modal = new Modal(child)
3. call modal.show(); to display modal

##Optional Properties and Methods
###Properties
#####Modal(child (dom element), strictClose (boolean))
    * if strict close is true, a user cannot click the backdrop to close the modal window, you must have font awesome to show the close 'x' icon
###Methods
* modal.unmount();
    * will remove modal from screen if you want to attach another close handler
