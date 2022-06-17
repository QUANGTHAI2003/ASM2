'use strict';

(function ($) {
    //Price Range Slider
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));
})(jQuery);

const decrementBtn = document.querySelector('#decrement');
const quantityElem = document.querySelector('#quantity');
const incrementBtn = document.querySelector('#increment');

function changeAmount() {
    for (let i = 0; i < incrementBtn.length; i++) {
        incrementBtn[i].addEventListener('click', function () {
            let increment = Number(this.previousElementSibling.innerText);
            increment++;
            this.previousElementSibling.innerText = increment;
        });
        decrementBtn[i].addEventListener('click', function () {
            let decrement = Number(this.nextElementSibling.innerText);
            decrement <= 0 ? 1 : decrement--;
            this.nextElementSibling.innerText = decrement;
        });
    }
}
changeAmount();