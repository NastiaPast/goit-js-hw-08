import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const handleTimeUpdate = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
player.on('timeupdate', throttle(handleTimeUpdate, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);
player.setCurrentTime(parsedTime.seconds || 0);
