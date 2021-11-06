import anime from 'animejs';
import $ from 'jquery';

function blink() {
    $('polyline.unsc')
      .delay(1000)
      .fadeOut(1)
      .delay(1000)
      .fadeIn(1);
}

var timesLooped = 0;

while (timesLooped != 10000) {
  $(blink);
  timesLooped += 1;
}

/* anime({
  targets: 'polyline.unsc',
  easing: ,
  direction: 'alternate',
  loop: true
}); */