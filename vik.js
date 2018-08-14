//Версія 1

var dos=0;

$(document).ready(function ()
    {
    $('#button').click(function ()
        {
        $(".item").remove();
        vik=$('input[name=checkListItem]').val();
        if (vik<25)               
          {dos=1}
        if (vik>=25) && (vik<=40) 
          {dos=2}
        if (vik>40)               
          {dos=3}
        
        switch (dos)
          {
          case 1: 
          $('.list').append('<div class="item">' + "Друже, ти ще такий молодий"  + '</div>');
          break;
          case 2:
          $('.list').append('<div class="item">' + "Друже, а ти уже дорослий! "  + '</div>');
          break;
          case 3:
          $('.list').append('<div class="item">' + "Друже, ти мудрий!"  + '</div>');
          break;
          default:
          $('.list').append('<div class="item">' + 'Хибне введення даних. Спробуй ще раз.' + '</div>');
          }
        });
    });
