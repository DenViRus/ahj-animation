export default class MainBoxController {
  constructor(box, collapse, callbackChat, liker, mainBoxAnimation) {
    this.box = box;
    this.collapse = collapse;
    this.callbackChat = callbackChat;
    this.liker = liker;
    this.mainBoxAnimation = mainBoxAnimation;

    this.taskCollapse = null;
    this.collapseButtonBox = null;
    this.taskCollapseDescription = null;

    this.taskCallbackChat = null;
    this.callbackChatButtonBox = null;
    this.taskCallbackChatModal = null;
    this.callbackChatModalClose = null;
    this.callbackChatModalSend = null;

    this.taskLiker = null;
    this.taskLikerButton = null;
    this.taskLike = null;
  }

  getTaskCollapse() {
    this.taskCollapse = this.collapse.getCollapse();
    this.box.append(this.taskCollapse);
    this.collapseButtonBox = this.taskCollapse.querySelector('.collapse-button-box');
  }

  getTaskCollapseDescription() {
    if (this.taskCollapseDescription) {
      this.taskCollapseDescription.classList.add('activate');
      setTimeout(() => {
        this.taskCollapseDescription.remove();
        this.taskCollapseDescription = null;
      }, 2000);
    } else {
      this.taskCollapseDescription = this.collapse.getCollapseDescription();
      this.collapseButtonBox.after(this.taskCollapseDescription);
    }
  }

  getTaskCallbackChat() {
    this.taskCallbackChat = this.callbackChat.getCallbackChat();
    this.box.append(this.taskCallbackChat);
    this.callbackChatButtonBox = this.taskCallbackChat.querySelector('.callbackChat-button-box');
  }

  getTaskCallbackChatModal() {
    this.taskCallbackChatModal = this.callbackChat.getCallbackChatModal();
    this.taskCallbackChat.append(this.taskCallbackChatModal);
    this.callbackChatModalClose = this.taskCallbackChatModal.querySelector('.callbackChat-modal-closer');
    this.callbackChatModalSend = this.taskCallbackChatModal.querySelector('.callbackChat-modal-button');
  }

  getTaskLiker() {
    this.taskLiker = this.liker.getLiker();
    this.box.append(this.taskLiker);
    this.taskLikerButton = this.taskLiker.querySelector('.liker-button');
  }

  getTaskLike() {
    this.taskLike = this.liker.getLike();
    this.taskLikerButton.before(this.taskLike);
  }

  init() {
    this.getTaskCollapse();
    this.getTaskCallbackChat();
    this.getTaskLiker();
  }

  control() {
    this.init();

    const boxListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest('.collapse-button')) {
        event.preventDefault();
        this.getTaskCollapseDescription();
      }

      if (this.target.closest('.callbackChat-button')) {
        event.preventDefault();

        this.mainBoxAnimation.animationOpacityReverse(this.callbackChatButtonBox, 1000);

        setTimeout(() => {
          this.callbackChatButtonBox.remove();
          this.getTaskCallbackChatModal();
          this.mainBoxAnimation.animationOpacity(this.taskCallbackChatModal, 1000);
        }, 500);
      }

      if (this.target.closest('.callbackChat-modal-closer') || this.target.closest('.callbackChat-modal-button')) {
        event.preventDefault();

        this.mainBoxAnimation.animationOpacityReverse(this.taskCallbackChatModal, 1000);

        setTimeout(() => {
          this.taskCallbackChatModal.remove();
          this.taskCallbackChatModal = null;
          this.taskCallbackChat.append(this.callbackChatButtonBox);
          this.mainBoxAnimation.animationOpacity(this.callbackChatButtonBox, 1000);
        }, 500);
      }

      if (this.target.closest('.liker-button')) {
        event.preventDefault();
        this.target.blur();
        this.getTaskLike();
      }
    };
    this.box.addEventListener('click', boxListener1);

    const boxListener2 = (event) => {
      this.target = event.target;
      if (this.target.closest('.task-like')) {
        event.preventDefault();
        this.target.remove();
      }
    };
    this.box.addEventListener('animationend', boxListener2);
  }
}
