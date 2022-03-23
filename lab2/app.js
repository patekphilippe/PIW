"use strict";
const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");

toDoButton.addEventListener("click", addTodo);
toDoList.addEventListener("click", changeTodo);

function addTodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-el");
  newTodo.innerText = toDoInput.value;

  todoDiv.appendChild(newTodo);

  const xButton = document.createElement("button");
  xButton.innerHTML = `<i class="las la-times"></i>`;
  xButton.classList.add("x-btn");
  todoDiv.appendChild(xButton);

  if (toDoInput.value != "") {
    toDoList.appendChild(todoDiv);
    toDoInput.value = "";
  }
  $(".x-btn").on("click", function () {
    $(this).closest("div").remove();
  });
}

function changeTodo(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "todo" && !item.classList[1]) {
    e.target.classList.add("grey");
  } else {
    e.target.classList.remove("grey");
  }

  for (var i = 0; i < item.childNodes.length; i++) {
    if (item.childNodes[i].className == "todo-el") {
      let innerVal = item.childNodes[i].innerText.split(" ");
      console.log(innerVal);

      let today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let newInnerVal = innerVal[0] + " " + date;
      item.childNodes[i].innerText = newInnerVal;
    }
  }
}
