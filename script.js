const input = document.querySelector("#input");
const plus = document.querySelector("#plus");
const list = document.querySelector(".list");


const addList = () => {
    if(input.value !== '') {
        let li = document.createElement("li");
        let paragraph = document.createElement("p");
        let btnDelete = document.createElement("button");

        btnDelete.setAttribute('class', 'btnDelete');
        btnDelete.innerHTML = "X";

        paragraph.innerHTML = input.value;

        let checkBox = document.createElement("input");
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('class', 'checkBox');     
        checkBox.style.width = '100px';

        list.appendChild(li);
        li.appendChild(checkBox);
        li.appendChild(paragraph);
        li.appendChild(btnDelete);
    
        input.value = '';
        saveItems();


        const checkList = () => {
            checkBox.addEventListener('click', () => {
                if(checkBox.checked) {
                    paragraph.style.color = 'gray';
                    paragraph.style.textDecoration = 'line-through';  
                    saveItems();
                } else {
                    paragraph.style.color = 'black';
                    paragraph.style.textDecoration = 'none';  
                    saveItems();
                }
            });
        }
        checkList();
        saveItems();

        const deleteItems = () => {
            btnDelete.addEventListener('clicl', () => {
                list.removeChild(li);
                saveItems();
            });
        }
    } else {
        alert("Please Fill The Column");
    }
}

plus.addEventListener("click", addList);

const saveItems = () => {
    localStorage.setItem("list", list.innerHTML);
}

const showItems = () => {
    list.innerHTML = localStorage.getItem('list');
}
showItems();

// const removeItems = () => {
//     localStorage.removeItem('list');
// }
// removeItems();