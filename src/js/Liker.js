import greenVir from '../img/greenvir.png';
import redVir from '../img/redvir.png';
import violetVir from '../img/violetvir.png';

export default class Liker {
  constructor() {
    this.name = 'liker';
    this.liker = null;
    this.likes = [greenVir, redVir, violetVir];
    this.animations = [
      'task-like-animation1',
      'task-like-animation2',
      'task-like-animation3',
      'task-like-animation4',
      'task-like-animation5',
      'task-like-animation6',
    ];
  }

  getLiker() {
    const likerBox = document.createElement('div');
    likerBox.className = 'task-liker';
    likerBox.setAttribute('id', 'taskLiker');
    const likerHeaderBox = document.createElement('div');
    likerHeaderBox.className = 'liker-header-box';
    const likerHeader = document.createElement('h3');
    likerHeader.className = 'liker-header';
    likerHeader.textContent = this.name;
    const likerButtonBox = document.createElement('div');
    likerButtonBox.className = 'liker-button-box';
    const likerButton = document.createElement('button');
    likerButton.className = 'liker-button';
    likerButton.setAttribute('type', 'button');
    likerButton.textContent = this.name;
    likerHeaderBox.append(likerHeader);
    likerButtonBox.append(likerButton);
    likerBox.append(likerHeaderBox);
    likerBox.append(likerButtonBox);
    this.liker = likerBox;
    return this.liker;
  }

  getRandom(arr) {
    this.arr = arr;
    const index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
  }

  getLike() {
    const likeBox = document.createElement('div');
    likeBox.className = `task-like ${this.getRandom(this.animations)}`;
    const likeImg = document.createElement('img');
    likeImg.className = 'like-img';
    likeImg.setAttribute('src', this.getRandom(this.likes));
    likeBox.append(likeImg);
    this.like = likeBox;
    return this.like;
  }
}
