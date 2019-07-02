function addToList(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        let textInput = $(this).find('#shopping-list-entry').val();
        
       // console.log(textInput.val());
       
        $('.shopping-list').prepend($(
            `<li>
            <span class="shopping-item">${textInput}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
            </li>`
          ));
    });
}
$(addToList);


function checkItem(){
    $('.shopping-item-toggle').on('click', function(event) {
      // alert('check has been pressed');
        
        //console.log($(this));
        
       $(this).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
    });
}
$(checkItem);

function deleteItem(){
    $('.shopping-item-delete').on('click', function(event) {
        $(this).parents('li').remove();
    })
} 

$(deleteItem);
