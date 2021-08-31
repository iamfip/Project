function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).
    then(date  => displayusers(date));
}

/* function loadPosts(){
    fetch('hhttps://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()).
    then(json => console.log(json));
}  */

function displayusers(data){
    const ul = document.getElementById("users");
    for ( const user of data){
        console.log(user);
        const li= document.createElement('li');
        li.innerText=`
            name: ${user.name}
            email: ${user.email}
            
        `;
        ul.appendChild(li);
    }
}