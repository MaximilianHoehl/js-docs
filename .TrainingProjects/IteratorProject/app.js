const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image : 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    {
        name: 'Peter Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image : 'https://randomuser.me/api/portraits/men/38.jpg'
    },
    {
        name: 'Larissa Jackson',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image : 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
        name: 'Rudolf Ruin',
        age: 32,
        gender: 'male',
        lookingfor: 'email',
        location: 'Boston MA',
        image : 'https://randomuser.me/api/portraits/men/25.jpg'
    }
];

function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex > data.length ?
            { data: profiles[nextIndex++], done: false } :
            {done: true}
        }
    }
}

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;
  
    if(currentProfile !== undefined) {
      document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name: ${currentProfile.name}</li>
          <li class="list-group-item">Age: ${currentProfile.age}</li>
          <li class="list-group-item">Location: ${currentProfile.location}</li>
          <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
      `;
  
      document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
      // No more profiles
      window.location.reload();
    }
  }
