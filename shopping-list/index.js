$(function shoppingList(){
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();

        const textInput = $(this).find('#shopping-list-entry');
        
       // console.log(textInput.val());
       //$(".shopping-item").text(textInput.val());
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${textInput.val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
    });

});

