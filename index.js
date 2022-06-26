// Создаю переменную в котором беру класс с инпутом 
const input = document.querySelector('.input')

// Создаю переменную в котором беру класс с кнопкой
const button = document.querySelector('.btn')

// Создаю переменную в котором беру класс с блоком в котором будут мои дела
const todos = document.querySelector('.todos')



// Обработчик события - будут добавляться события
// События будут происходить с кнопкой

// Создал обработчик событий задал ему "логику типо" что при каждом клике на кнопку будут добавлять в мой блок todos дела,
// а добавлять они будут из инпута, то есть значение которое содержится в инпуте будет пушиться в мой блок todos

button.addEventListener('click', (e) => {
    // todos.innerHTML += `<p>${input.value}</p>` НЕ ВАЖНО 
// если строка инпута будет пустой, то ничего не возращать
if(input.value === '') return
// активирую функцию создания  и удаления дел
    createDeleteElements(input.value)

    // при каждом клике будет сбрасываться строка, то есть присваивание пустой строки
    input.value = ''
})


// Создаю функцию для удаления и создания элементов DOM
function createDeleteElements (value) {
    console.log(value)
// создание и вложение параграфа, то есть создание дел и вложение в родительский блок
    const p = document.createElement('p')
    p.className = 'p'
    p.textContent = value
    // вложение в конец родительского
    todos.appendChild(p)

// удаление дел, создаю элемент кнопки, присваиваю этой кнопке класс, Добавляю текст в кнопку, и добавлю эту кнопку удаления в конец моих дел, то есть у моих дел будет кнопка с функционалом удаления
    const button = document.createElement('button')
    button.className = 'btn'
    button.textContent = '[X]'
    p.appendChild(button)

    // применение css свойств делам которые выполнены, максимально тиш йина конечно но я страшно устал
    p.addEventListener('click', (e) => {
        p.classList.toggle('to-active')
    })

// создаю функционал удаления дел
    button.addEventListener('click', (e) => {
        todos.removeChild(p)
    })
}