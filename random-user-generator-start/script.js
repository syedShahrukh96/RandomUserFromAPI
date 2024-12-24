function fetchUser() {
    showSpinner();
    fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then((data) => {
            hideSpinner();
            displayUser(data.results[0]);
        });    
}

function displayUser(user) {
    console.log(user);
    const userDisplay = document.getElementById('user');
    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple';
    } else {
        document.body.style.backgroundColor = 'steelblue';
    }

    userDisplay.innerHTML = `<div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.medium}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span>${user.location.street.number} ${user.location.street.name} ${user.location.city}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.age}</p>
            </div>
          </div>
        </div>`;
}

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}


document.querySelector('#generate').addEventListener('click', fetchUser);


fetchUser();