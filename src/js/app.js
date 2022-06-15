import MainBoxController from './MainBoxController.js';
import Collapse from './Collapse.js';
import CallbackChat from './CallbackChat.js';
import Liker from './Liker.js';
import MainBoxAnimation from './MainBoxAnimation.js';

const mainBox = document.getElementById('mainContainer');
const collapse = new Collapse();
const callbackChat = new CallbackChat();
const liker = new Liker();
const mainBoxAnimation = new MainBoxAnimation();

const mainBoxController = new MainBoxController(mainBox, collapse, callbackChat, liker, mainBoxAnimation);
mainBoxController.control();
