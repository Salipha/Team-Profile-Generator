const Manager = require('../lib/Manager');
const Artist = require('../lib/Artist');
const Trainee = require('../lib/Trainee');


function generateCards(team) {
  let cards = []

  for (let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch (teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        cards.push(generateManagerCard(manager));
        break;
      case 'Artist':
        const artist = new Artist(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        cards.push(generateArtistCard(artist));
        break;
      case 'Trainee':
        const trainee = new Trainee(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        cards.push(generateTraineeCard(trainee));
        break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
          <div class="card m-1 shadow" style="width: 18rem">
            <div class='card-header'>
              <h3 class="card-title">${Manager.getName()}</h3>
              <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: ${Manager.getEmail()}</li>
                <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
              </ul>
            </div>
          </div>
          `
}

let generateArtistCard = (Artist) => {
  return `
          <div class="card m-1 shadow" style="width: 18rem">
            <div class='card-header'>
              <h3 class="card-title">${Artist.getName()}</h3>
              <h6 class="card-text"><i class="fa fa-laptop"></i> ${Artist.getRole()}</h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Artist.getId()}</li>
                <li class="list-group-item">Email: ${Artist.getEmail()}</li>
                <li class="list-group-item">GitHub: ${Artist.getGithub()}</li>
              </ul>
            </div>
          </div>
          `
};

let generateTraineeCard = (Trainee) => {
  return `
          <div class="card m-1 shadow" style="width: 18rem">
            <div class='card-header'>
              <h3 class="card-title">${Trainee.getName()}</h3>
              <h6 class="card-text"><i class="fa fa-graduation-cap"></i> ${Trainee.getRole()}</h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Trainee.getId()}</li>
                <li class="list-group-item">Email: ${Trainee.getEmail()}</li>
                <li class="list-group-item">School: ${Trainee.getSchool()}</li>
              </ul>
            </div>
          </div>
          `
}

function generateTeam(team) {
  console.log(team)
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
          <title>My Team</title>
        </head>
        <body>
        <div class="jumbotron jumbotron-fluid bg-danger">
          <div class="container">
            <h1 class="display-4 text-center">My Team</h1>
          </div>
        </div>
        <div class="d-flex flex-row flex-wrap justify-content-center bg-primary">
        ${generateCards(team)}
        </div>
        </body>
        </html>
            `
}


module.exports = generateTeam;