async function loadItems() {

    const res = await fetch("/items");

    if (res.status !== 200) {

        window.location.href = "/";
        return;
    }

    const data = await res.json();

    const list = document.getElementById("list");

    list.innerHTML = "";

    data.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
        <span>${item.name}</span>

        <div class="actions">

            <button class="edit"
                onclick="editItem('${item._id}', '${item.name}')">
                Edit
            </button>

            <button onclick="deleteItem('${item._id}')">
                X
            </button>

        </div>
        `;

        list.appendChild(li);
    });
}

async function addItem() {

    const input = document.getElementById("name");

    const name = input.value;

    await fetch("/add", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ name })
    });

    input.value = "";

    loadItems();
}

async function deleteItem(id) {

    await fetch(`/delete/${id}`, {
        method: "DELETE"
    });

    loadItems();
}

async function editItem(id, oldName) {

    const newName = prompt("Edit task:", oldName);

    if (!newName) return;

    await fetch(`/update/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: newName
        })
    });

    loadItems();
}

async function logout() {

    await fetch("/logout");

    window.location.href = "/";
}

loadItems();