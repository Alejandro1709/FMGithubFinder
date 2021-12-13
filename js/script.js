let textInput = document.getElementsByClassName('input')[0];
let searchButton = document.getElementsByClassName('searchBtn')[0];
let noResultsLabel = document.getElementsByClassName('no-results')[0];
let searchBar = document.getElementsByClassName('container__middle')[0];
let username = document.getElementById('username');
let handle = document.getElementById('handle');
let date = document.getElementById('date');
let profilePicture = document.getElementsByClassName('prof')[0];
let description = document.getElementsByClassName('desc')[0];
let numberOfRepos = document.getElementById('num_repos');
let numberOfFollowers = document.getElementById('num-followers');
let numberOfFollowing = document.getElementById('num-following');
let locationn = document.getElementById('location');
let twitterr = document.getElementById('twitter');
let website = document.getElementById('web');
let workk = document.getElementById('work');

const handleSearchUser = () => {
  if (!textInput.value) {
    let nores = document.createElement('p');
    nores.className = 'no-results';
    nores.innerText = 'No Results';
    searchBar.appendChild(nores);
    return;
  }

  let apiUrl = `https://api.github.com/users/${textInput.value}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      if (data.login === null) {
        let nores = document.createElement('p');
        nores.className = 'no-results';
        nores.innerText = 'No Results';
        searchBar.appendChild(nores);
      } else {
        console.log(data);
        username.innerText = data.login;
        profilePicture.src = data.avatar_url;
        handle.innerText = `@${data.login}`;
        date.innerText = data.created_at;
        description.innerText = data.bio;
        numberOfRepos.innerText = data.public_repos;
        numberOfFollowing.innerText = data.following;
        numberOfFollowers.innerText = data.followers;
        website.innerText = data.blog;
        website.href = data.blog;
        workk.innerText = data.work;
        if (!data.twitter_username) {
          twitterr.innerText = 'Not Available';
        } else {
          twitterr.innerText = data.twitter_username;
        }
        locationn.innerText = data.location;
        textInput.value = '';
      }
    })
    .catch((err) => {
      let nores = document.createElement('p');
      nores.className = 'no-results';
      nores.innerText = 'No Results';
      searchBar.appendChild(nores);
    });
};

searchButton.addEventListener('click', handleSearchUser);
