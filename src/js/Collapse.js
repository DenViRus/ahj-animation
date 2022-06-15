export default class Collapse {
  constructor() {
    this.name = 'collapse';
    this.paragraph1 = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.';
    this.paragraph2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    this.collapse = null;
    this.collapseDescription = null;
  }

  getCollapse() {
    const collapseBox = document.createElement('div');
    collapseBox.className = 'task-collapse';
    collapseBox.setAttribute('id', 'taskCollapse');
    const collapseHeaderBox = document.createElement('div');
    collapseHeaderBox.className = 'collapse-header-box';
    const collapseHeader = document.createElement('h3');
    collapseHeader.className = 'collapse-header';
    collapseHeader.textContent = this.name;
    const collapseButtonBox = document.createElement('div');
    collapseButtonBox.className = 'collapse-button-box';
    const collapseButton = document.createElement('button');
    collapseButton.className = 'collapse-button';
    collapseButton.setAttribute('type', 'button');
    collapseButton.textContent = this.name;
    const collapseCopyBox = document.createElement('div');
    collapseCopyBox.className = 'collapse-copy-box';
    const collapseCopy = document.createElement('span');
    collapseCopy.className = 'collapse-copy';
    collapseCopy.textContent = 'Copy';
    collapseHeaderBox.append(collapseHeader);
    collapseButtonBox.append(collapseButton);
    collapseCopyBox.append(collapseCopy);
    collapseBox.append(collapseHeaderBox);
    collapseBox.append(collapseButtonBox);
    collapseBox.append(collapseCopyBox);
    this.collapse = collapseBox;
    return this.collapse;
  }

  getCollapseDescription() {
    const collapseDescriptionBox = document.createElement('div');
    collapseDescriptionBox.className = 'collapse-description-box';
    const collapseDescription1 = document.createElement('p');
    collapseDescription1.className = 'collapse-description';
    collapseDescription1.textContent = this.paragraph1;
    const collapseDescription2 = document.createElement('p');
    collapseDescription2.className = 'collapse-description';
    collapseDescription2.textContent = this.paragraph2;
    collapseDescriptionBox.append(collapseDescription1);
    collapseDescriptionBox.append(collapseDescription2);
    this.collapseDescription = collapseDescriptionBox;
    return this.collapseDescription;
  }
}
