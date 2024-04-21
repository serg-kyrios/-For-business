'use strict';

// Відкрити модальне вікно
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Закрити модальне вікно
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Додати користувача, введеного через модальне вікно
function addUserFromModal() {
    let userName = document.getElementById('userNameInput').value;
    if (userName) {
        let listNone;
        let listItem = document.createElement('li');
        listItem.textContent = userName;
        document.getElementById('userList').appendChild(listItem);
        closeModal(); // Закрити модальне вікно після додавання користувача
    } else {
        let errorMessage = document.createElement('p');
        errorMessage.textContent = "Ви не ввели ім'я користувача!";
        errorMessage.style.color = 'red';
        document.getElementById('myModal').appendChild(errorMessage);
        setTimeout(function () {
            errorMessage.remove();
        }, 3000); // Видалити повідомлення про помилку після 3 секунд
    }
}
