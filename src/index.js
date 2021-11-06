import $ from 'jquery';

function blink() {
    $('polyline.unsc')
      .delay(1000)
      .fadeOut(1)
      .delay(1000)
      .fadeIn(1);
}

let timesLooped = 0;

while (timesLooped != 9999999999) {
  $(blink);
  timesLooped += 1;
}