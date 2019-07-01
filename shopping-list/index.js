function addingItems(){
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        let textInput = $(".js-shopping-list-entry").find('shopping-list-entry').val();
        $(".shopping-item").txt(textInput);
    });
};

