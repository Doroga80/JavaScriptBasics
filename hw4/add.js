// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

// Получение списка пользователей с помощью AJAX запроса
function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
  
    fetch(url)
      .then(response => response.json())
      .then(users => {
        displayUsers(users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }
  
  // Отображение пользователей на странице
  function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Очистить список пользователей перед отображением новых данных
  
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.textContent = user.name;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        deleteUser(user.id);
      });
  
      userItem.appendChild(deleteButton);
      userList.appendChild(userItem);
    });
  }
  
  // Удаление пользователя
  function deleteUser(userId) {
    // Реализация удаления пользователя по его ID
    console.log('Deleting user with ID:', userId);
  }
  
  // Вызов функции для получения списка пользователей при загрузке страницы
  document.addEventListener('DOMContentLoaded', getUsers);

  
//   Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

// Получение 10 случайных картинок собак с интервалом в 3 секунды
function getDogImages() {
    const url = 'https://dog.ceo/api/breeds/image/random/10';
  
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= 10) {
        clearInterval(interval); // Остановить интервал после отображения 10 картинок
        return;
      }
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayDogImage(data.message);
        })
        .catch(error => {
          console.error('Error fetching dog images:', error);
        });
  
      counter++;
    }, 3000);
  }
  
  // Отображение картинок собак на странице
  function displayDogImage(images) {
    const imageContainer = document.getElementById('dog-images');
    
    images.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Dog';
      imageContainer.appendChild(img);
    });
  }
  
  // Вызов функции для получения картинок собак с интервалом
  document.addEventListener('DOMContentLoaded', getDogImages);
  