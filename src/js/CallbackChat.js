export default class Collapse {
  constructor() {
    this.name = 'callback chat';
    this.callbackChat = null;
    this.callbackChatModal = null;
  }

  getCallbackChat() {
    const callbackChatBox = document.createElement('div');
    callbackChatBox.className = 'task-callbackChat';
    callbackChatBox.setAttribute('id', 'taskCallbackChat');
    const callbackChatHeaderBox = document.createElement('div');
    callbackChatHeaderBox.className = 'callbackChat-header-box';
    const callbackChatHeader = document.createElement('h3');
    callbackChatHeader.className = 'callbackChat-header';
    callbackChatHeader.textContent = this.name;
    const callbackChatButtonBox = document.createElement('div');
    callbackChatButtonBox.className = 'callbackChat-button-box';
    const callbackChatButton = document.createElement('button');
    callbackChatButton.className = 'callbackChat-button';
    callbackChatButton.setAttribute('type', 'button');
    callbackChatButton.textContent = this.name;
    callbackChatHeaderBox.append(callbackChatHeader);
    callbackChatButtonBox.append(callbackChatButton);
    callbackChatBox.append(callbackChatHeaderBox);
    callbackChatBox.append(callbackChatButtonBox);
    this.callbackChat = callbackChatBox;
    return this.callbackChat;
  }

  getCallbackChatModal() {
    const callbackChatModalBox = document.createElement('div');
    callbackChatModalBox.className = 'callbackChat-modal';
    const callbackChatModalHeaderBox = document.createElement('div');
    callbackChatModalHeaderBox.className = 'callbackChat-modal-header-box';
    const callbackChatModalHeader = document.createElement('h3');
    callbackChatModalHeader.className = 'callbackChat-modal-header';
    callbackChatModalHeader.textContent = 'Contact us';
    const callbackChatModalCloser = document.createElement('h3');
    callbackChatModalCloser.className = 'callbackChat-modal-closer';
    callbackChatModalCloser.textContent = 'x';
    const callbackChatModalFormBox = document.createElement('div');
    callbackChatModalFormBox.className = 'callbackChat-modal-form-box';
    const callbackChatModalForm = document.createElement('form');
    callbackChatModalForm.className = 'callbackChat-modal-form';
    const callbackChatModalText = document.createElement('textarea');
    callbackChatModalText.className = 'callbackChat-modal-text';
    callbackChatModalText.setAttribute('type', 'text');
    callbackChatModalText.setAttribute('name', 'modalText');
    callbackChatModalText.setAttribute('autocomplete', 'off');
    callbackChatModalText.setAttribute('required', 'true');
    callbackChatModalText.setAttribute('rows', '10');
    callbackChatModalText.setAttribute('maxLength', '500');
    const callbackChatModalButton = document.createElement('button');
    callbackChatModalButton.className = 'callbackChat-modal-button';
    callbackChatModalButton.setAttribute('type', 'submit');
    callbackChatModalButton.textContent = 'send';
    callbackChatModalForm.append(callbackChatModalText);
    callbackChatModalForm.append(callbackChatModalButton);
    callbackChatModalHeaderBox.append(callbackChatModalHeader);
    callbackChatModalHeaderBox.append(callbackChatModalCloser);
    callbackChatModalFormBox.append(callbackChatModalForm);
    callbackChatModalBox.append(callbackChatModalHeaderBox);
    callbackChatModalBox.append(callbackChatModalFormBox);
    this.callbackChatModal = callbackChatModalBox;
    return this.callbackChatModal;
  }
}
