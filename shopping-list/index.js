function addingItems(){
    $('#js-shopping-list-form').submit(function(){
        event.preventDefault();
        let textInput = $("shopping-list-entry").val();
        $(".shopping-item").html(textInput);
    });
};

