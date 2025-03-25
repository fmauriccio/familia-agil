function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("app").style.display = "block";
    } else {
        alert("Preencha o e-mail e a senha.");
    }
}

function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(page).style.display = "block";
}

// 🗓 Simples calendário (Apenas um espaço por enquanto)
document.getElementById("calendarBox").innerHTML = "<p>Eventos aparecerão aqui...</p>";

// ✅ Adicionar Tarefas
function addTask() {
    let taskText = document.getElementById("newTask").value;
    if (taskText) {
        let li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = () => moveToScrum(li);
        document.getElementById("taskList").appendChild(li);
        document.getElementById("newTask").value = "";
    }
}

// 🏷 Mover para Scrum
function moveToScrum(taskElement) {
    let clone = taskElement.cloneNode(true);
    document.getElementById("todoList").appendChild(clone);
    taskElement.remove();
}

