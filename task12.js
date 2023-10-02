function addUserToLocalStorage(name, email, mobile) {
    const newUser = {
      name: name,
      email: email,
      mobile: mobile,
    };
  
   
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    
    users.push(newUser);
  
    
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function getAllUsersFromLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
  }
  

  addUserToLocalStorage('John Doe', 'john@example.com');
  

  const allUsers = getAllUsersFromLocalStorage();

  console.log('All Users:');
  allUsers.forEach((user, index) => {
    console.log(`User ${index + 1}:`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Mobile: ${user.mobile}`);
    console.log('*********************');
  });
  