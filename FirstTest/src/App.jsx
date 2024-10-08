import React from 'react'
import './App.css'
import ToDoContainer from './components/AdressBookContainer'

function App() {
  return <ToDoContainer />
}

export default App

// Реалізувати Address Book

// Вимоги.
// 1. Додаток має містити форму для додавання, пошук та таблицю.
// 2. Модель Book

// id
// firstName*
// lastName*
// phone*

// 3. Якщо список порожній, відобразити No data to display.
// 4. Для форми додавання передбачити валідацію:

// required fields:
// firstName*
// lastName*
// phone*

// Error message pattern: The <field name> is required
// Example: The first name is required

// Повідомлення підсвітити червониим.

// 4. У таблиці відобразити поля

// id
// First Name
// Last Name
// Phone

// 5. Передбачити редагування рядка. При цьому поле не може бути пустим.

// 6. До завдання зробити схему з допоиогою Draw.io.

// 7. Вказати патерни, які використовувалися для виведення таблиці.
