const water1 = document.querySelector(".water1");
const water2 = document.querySelector(".water2");
const water3 = document.querySelector(".water3");
const water4 = document.querySelector(".water4");
const water5 = document.querySelector(".water5");
const water6 = document.querySelector(".water6");
const water7 = document.querySelector(".water7");
const water8 = document.querySelector(".water8");
const water9 = document.querySelector(".water9");
const water10 = document.querySelector(".water10");
const water11 = document.querySelector(".water11");
const water12 = document.querySelector(".water12");
const waterReset = document.querySelector("#drinkWater");

water1.addEventListener("click", () => {
  water1.style.filter = "grayscale(50%)";
});
water2.addEventListener("click", () => {
  water2.style.filter = "grayscale(50%)";
});
water3.addEventListener("click", () => {
  water3.style.filter = "grayscale(50%)";
});
water4.addEventListener("click", () => {
  water4.style.filter = "grayscale(50%)";
});
water5.addEventListener("click", () => {
  water5.style.filter = "grayscale(50%)";
});
water6.addEventListener("click", () => {
  water6.style.filter = "grayscale(50%)";
});
water7.addEventListener("click", () => {
  water7.style.filter = "grayscale(50%)";
});
water8.addEventListener("click", () => {
  water8.style.filter = "grayscale(50%)";
});
water9.addEventListener("click", () => {
  water9.style.filter = "grayscale(50%)";
});
water10.addEventListener("click", () => {
  water10.style.filter = "grayscale(50%)";
});
water11.addEventListener("click", () => {
  water11.style.filter = "grayscale(50%)";
});
water12.addEventListener("click", () => {
  water12.style.filter = "grayscale(50%)";
});

waterReset.addEventListener("click", () => {
  water1.style.filter = "grayscale(100%)";
  water2.style.filter = "grayscale(100%)";
  water3.style.filter = "grayscale(100%)";
  water4.style.filter = "grayscale(100%)";
  water5.style.filter = "grayscale(100%)";
  water6.style.filter = "grayscale(100%)";
  water7.style.filter = "grayscale(100%)";
  water8.style.filter = "grayscale(100%)";
  water9.style.filter = "grayscale(100%)";
  water10.style.filter = "grayscale(100%)";
  water11.style.filter = "grayscale(100%)";
  water12.style.filter = "grayscale(100%)";
});

const addBtn = document.querySelector(".add-btn");
const inputTask = document.querySelector("#task");
const inputPriority = document.querySelector("#priority");
const importantBox = document.querySelector(".important");
const checklistReset = document.querySelector("h1");

addBtn.addEventListener("click", () => {
  const taskValue = inputTask.value;

  const priorityValue = inputPriority.value;

  const newCheck = document.createElement("div");
  const newTask = document.createElement("div");
  const newTaskP = document.createElement("p");
  const newPriority = document.createElement("div");
  const newPriorityP = document.createElement("p");
  const newBtn = document.createElement("div");
  const newBtnP = document.createElement("button");
  const checkBox = document.querySelector("#checklist");
  // const rmBtn = document.querySelector(".doneBtn");

  newCheck.classList.add("checklistItems");
  newTaskP.classList.add("doText");
  newTask.classList.add("do");
  newPriorityP.classList.add("importantText");
  newPriority.classList.add("important");
  newBtnP.classList.add("doneBtn");
  newBtn.classList.add("check");

  newTaskP.append(taskValue);
  newPriorityP.append(priorityValue);
  newBtnP.append("Done");
  newTask.append(newTaskP);
  newPriority.append(newPriorityP);
  newBtn.append(newBtnP);
  newCheck.append(newTask);
  newCheck.append(newPriority);
  newCheck.append(newBtn);

  if (priorityValue === "High") {
    newCheck.style.order = "-2";
    checkBox.append(newCheck);
  } else if (priorityValue === "Medium") {
    newPriority.style.backgroundColor = "#80B9AD";
    newCheck.style.order = "-1";
    checkBox.append(newCheck);
  } else if (priorityValue === "Low") {
    newPriority.style.backgroundColor = "#B3E2A7";
    checkBox.append(newCheck);
  }

  // rmBtn.addEventListener("click", () => {
  //   const currentBox = rmBtn.parentElement.parentElement;
  //   currentBox.remove();
  // });
});

// The checklistContainer listens for click events and checks
// if the clicked element has the class name doneBtn
// If the condition is met, the code finds
// the closest ancestor element with the class name
// checklistItems (the parent checklistItem),
// and removes it from the DOM using the remove() method.
const checklistContainer = document.querySelector("#checklist");

checklistContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("doneBtn")) {
    const checklistItem = event.target.closest(".checklistItems");
    checklistItem.remove();
  }
});

// checklistReset.addEventListener("click", () => {
//   const allChecklist = document.querySelectorAll(".checklistItems");
//   allChecklist.remove();
// });
