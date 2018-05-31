let created = 0;

class UI {
  logData(data) {
    console.log(data);

    if (created === 0) {
      this.createCard(data);
    }
    else {
      document.querySelector('.info').classList = 'info animated-fast fadeOutUpBig';
      setTimeout(() => {
        document.querySelector('.info').remove();   
        this.createCard(data);     
      }, 200);
    }
  }

  createCard(data) {
    let infoCard = document.createElement('div');
    infoCard.classList = 'info animated-fast fadeInUpBig';
    infoCard.innerHTML = `
      <img src="img/x.svg" alt="close-icon" class="close-icon">

      <h2 class="launchpad-name">${data.full_name}</h2>
      <span class="launchpad-status">active</span>

      <h3 class="header">Location</h3>
      <h4 class="subheader">Name: ${data.location.name}</h4>
      <h4 class="subheader">Region: ${data.location.region}</h4>

      <h3 class="header">Launched</h3>
      <h4 class="subheader">${data.vehicles_launched[0]}</h4>
      <h4 class="subheader">${data.vehicles_launched[1]}</h4>
    `;

    document.querySelector('.container').appendChild(infoCard);

    this.removeListener();

    created++;
  }

  removeListener() {
    document.querySelector('.close-icon').addEventListener('click', e => {
      e.target.parentElement.classList = 'info animated-fast fadeOutUp';
      setTimeout(() => {
        e.target.parentElement.remove();
      }, 600);
      created = 0;
    })
  }
}
