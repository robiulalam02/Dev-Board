// Theme color wheel functionality

const colors = [
  "#f4a261",
  "#2a9d8f",
  "#e76f51",
  "#264653",
  "#ffb703",
  "#8338ec",
  "#F4F7FF",
];
let colorIndex = 0;

document.getElementById("theme").addEventListener("click", function () {
  for (let i = 0; i < colors.length; i++) {
    if (i === colorIndex) {
      document.body.style.backgroundColor = colors[i];
      colorIndex = colorIndex + 1;
      colorIndex = colorIndex % colors.length;
      break;
    }
  }
});

function makeInteger(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

const activityLog = document.getElementById("activity-log");

function activityMsg(title, time) {
  const activity = document.createElement("p");
  activity.innerText = `sucessfully boarded ${title} at ${time}`;
  activity.classList.add("activity-msg");
  return activity;
}

document.getElementById("task-btn-1").addEventListener("click", function () {
  const count = 1;
  const taskCount = makeInteger("task-count");
  const totalTask = makeInteger("total-task");
  const title = document.getElementById("task1-title").innerText;
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  alert("Board Updated Successfully");
  document.getElementById("task-count").innerText = taskCount - count;
  document.getElementById("total-task").innerText = totalTask + count;
  document.getElementById("task-btn-1").setAttribute("disabled", true);
  document.getElementById("task-btn-1").style.opacity = "0.5";
  activityLog.appendChild(activityMsg(title, timeString));
  if (document.getElementById("task-count").innerText === "0") {
    alert("Congrats!!! You've Completed All Board");
  }
});
document.getElementById("task-btn-2").addEventListener("click", function () {
  const count = 1;
  const taskCount = makeInteger("task-count");
  const totalTask = makeInteger("total-task");
  const title = document.getElementById("task2-title").innerText;
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  alert("Board Updated Successfully");
  document.getElementById("task-count").innerText = taskCount - count;
  document.getElementById("total-task").innerText = totalTask + count;
  document.getElementById("task-btn-2").setAttribute("disabled", true);
  document.getElementById("task-btn-2").style.opacity = "0.5";
  activityLog.appendChild(activityMsg(title, timeString));
  if (document.getElementById("task-count").innerText === "0") {
    alert("Congrats!!! You've Completed All Board");
  }
});
document.getElementById("task-btn-3").addEventListener("click", function () {
  const count = 1;
  const taskCount = makeInteger("task-count");
  const totalTask = makeInteger("total-task");
  const title = document.getElementById("task3-title").innerText;
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  alert("Board Updated Successfully");
  document.getElementById("task-count").innerText = taskCount - count;
  document.getElementById("total-task").innerText = totalTask + count;
  document.getElementById("task-btn-3").setAttribute("disabled", true);
  document.getElementById("task-btn-3").style.opacity = "0.5";
  activityLog.appendChild(activityMsg(title, timeString));
  if (document.getElementById("task-count").innerText === "0") {
    alert("Congrats!!! You've Completed All Board");
  }
});
document.getElementById("task-btn-4").addEventListener("click", function () {
  const count = 1;
  const taskCount = makeInteger("task-count");
  const totalTask = makeInteger("total-task");
  const title = document.getElementById("task4-title").innerText;
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  alert("Board Updated Successfully");
  document.getElementById("task-count").innerText = taskCount - count;
  document.getElementById("total-task").innerText = totalTask + count;
  document.getElementById("task-btn-4").setAttribute("disabled", true);
  document.getElementById("task-btn-4").style.opacity = "0.5";
  activityLog.appendChild(activityMsg(title, timeString));
  if (document.getElementById("task-count").innerText === "0") {
    alert("Congrats!!! You've Completed All Board");
  }
});
document.getElementById("task-btn-5").addEventListener("click", function () {
  const count = 1;
  const taskCount = makeInteger("task-count");
  const totalTask = makeInteger("total-task");
  const title = document.getElementById("task5-title").innerText;
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  alert("Board Updated Successfully");
  document.getElementById("task-count").innerText = taskCount - count;
  document.getElementById("total-task").innerText = totalTask + count;
  document.getElementById("task-btn-5").setAttribute("disabled", true);
  document.getElementById("task-btn-5").style.opacity = "0.5";
  activityLog.appendChild(activityMsg(title, timeString));
  if (document.getElementById("task-count").innerText === "0") {
    alert("Congrats!!! You've Completed All Board");
  }
});
document.getElementById("task-btn-6").addEventListener("click", function () {
  const count = 1;
  const taskCount = makeInteger("task-count");
  const totalTask = makeInteger("total-task");
  const title = document.getElementById("task6-title").innerText;
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  alert("Board Updated Successfully");
  document.getElementById("task-count").innerText = taskCount - count;
  document.getElementById("total-task").innerText = totalTask + count;
  document.getElementById("task-btn-6").setAttribute("disabled", true);
  document.getElementById("task-btn-6").style.opacity = "0.5";
  activityLog.appendChild(activityMsg(title, timeString));
  if (document.getElementById("task-count").innerText === "0") {
    alert("Congrats!!! You've Completed All Board");
  }
});

document.getElementById("activity-clear-btn").addEventListener("click", function(){
  activityLog.innerHTML = "";
})