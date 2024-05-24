document.addEventListener('DOMContentLoaded', function() {
    var buttons= document.getElementsByClassName('addToCartButton');

    for(let i = 0; i < buttons.length;i++){
        let element = buttons[i];

        if (element) {
            element.addEventListener('click', function() {
                alert('Ваш товар успешно добавлен в корзину');
            });
        } else {
            console.log('Элемент с идентификатором "addToCartButton" не найден на странице.');
        }
    }
});

document.getElementById('productRating').addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        // Удаляем все выбранные звезды
        var spans = this.getElementsByTagName('span');
        for (var i = 0; i < spans.length; i++) {
            spans[i].innerHTML = '☆';
        }

        // Устанавливаем выбранный рейтинг
        for (var i = 0; i < event.target.dataset.index; i++) {
            spans[i].innerHTML = '★';
        }

        // Сохраняем выбранный рейтинг (например, в переменной или отправляем на сервер)
        var selectedRating = event.target.dataset.index + 1;
        console.log('Выбранный рейтинг: ', selectedRating);

        window.location.href = 'file:///E:/Сайт/favourites.html';
    }
});

// Добавляем data-index к каждому элементу span внутри элемента с id="productRating"
var spans = document.getElementById('productRating').getElementsByTagName('span');
for (var i = 0; i < spans.length; i++) {
    spans[i].dataset.index = i;
}