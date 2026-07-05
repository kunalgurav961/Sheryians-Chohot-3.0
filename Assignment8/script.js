const login = document.getElementById("login")
const register = document.getElementById("register")
const dashboard = document.getElementById("dashboard")
const reg_btn = document.getElementById("reg-btn")
const log_btn = document.getElementById("log-btn")
const log_form = document.getElementById("log-form")
const reg_form = document.getElementById("reg-form")
const logout = document.getElementById("logout")
const transaction_form  = document.getElementById("transaction-form")
const save_button  = document.getElementById("save-transaction")
const open_transaction_modal = document.getElementById("open-transaction-modal")
const transaction_overlay = document.getElementById("transaction-overlay")
const close_transaction_modal_btn = document.getElementById("close-transaction-card")
const cancel_transaction_btn = document.getElementById("cancel-transaction")
const theme_toggle = document.getElementById("theme-toggle")
const theme_toggle_circle = document.getElementById("theme-toggle-circle")
const reset_data_btn = document.getElementById("reset-data")

function openTransactionModal() {
    if (transaction_overlay) {
        transaction_overlay.classList.remove("hidden")
        transaction_overlay.classList.add("flex")
    }
}

function closeTransactionModal() {
    if (transaction_overlay) {
        transaction_overlay.classList.add("hidden")
        transaction_overlay.classList.remove("flex")
    }
}

function updateTransactionSummary() {
    const balanceValue = document.getElementById("balance-value")
    const incomeValue = document.getElementById("income-value")
    const expenseValue = document.getElementById("expense-value")
    const transactionCount = document.getElementById("transaction-count")

    const currentUser = JSON.parse(localStorage.getItem("currentuser"))
    let userKey = "transactions"

    if (currentUser && currentUser.username) {
        userKey = "transactions-" + currentUser.username
    }

    const savedTransactions = JSON.parse(localStorage.getItem(userKey)) || []

    let totalIncome = 0
    let totalExpense = 0

    savedTransactions.forEach((transaction) => {
        const amount = Number(transaction.amount)

        if (transaction.type === "income") {
            totalIncome += amount
        } else if (transaction.type === "expense") {
            totalExpense += amount
        }
    })

    const balance = totalIncome - totalExpense

    if (balanceValue) {
        balanceValue.textContent = "$" + balance.toFixed(2)
    }

    if (incomeValue) {
        incomeValue.textContent = "$" + totalIncome.toFixed(2)
    }

    if (expenseValue) {
        expenseValue.textContent = "$" + totalExpense.toFixed(2)
    }

    if (transactionCount) {
        transactionCount.textContent = savedTransactions.length
    }
}

function toggleTheme() {
    const body = document.body

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode")
        body.classList.add("dark-mode")
        body.style.backgroundColor = "#111827"
        body.style.color = "white"
        if (theme_toggle_circle) {
            theme_toggle_circle.style.right = "4px"
        }
    } else {
        body.classList.remove("dark-mode")
        body.classList.add("light-mode")
        body.style.backgroundColor = "#f8fafc"
        body.style.color = "#111827"
        if (theme_toggle_circle) {
            theme_toggle_circle.style.right = "0px"
        }
    }
}

function resetAllData() {
    const currentUser = JSON.parse(localStorage.getItem("currentuser"))
    let userKey = "transactions"

    if (currentUser && currentUser.username) {
        userKey = "transactions-" + currentUser.username
    }

    localStorage.removeItem(userKey)
    updateTransactionSummary()
}

// check if user loggedIn
function isUserLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        login.style.display = "none"
        register.style.display = "none"
        dashboard.style.display = "flex"
    } else {
        login.style.display = "flex"
        register.style.display = "none"
        dashboard.style.display = "none"   
    }

    updateTransactionSummary()
}
isUserLoggedIn();
updateTransactionSummary();

if (open_transaction_modal) {
    open_transaction_modal.addEventListener("click", openTransactionModal)
}

if (close_transaction_modal_btn) {
    close_transaction_modal_btn.addEventListener("click", closeTransactionModal)
}

if (cancel_transaction_btn) {
    cancel_transaction_btn.addEventListener("click", closeTransactionModal)
}

if (transaction_overlay) {
    transaction_overlay.addEventListener("click", (e) => {
        if (e.target === transaction_overlay) {
            closeTransactionModal()
        }
    })
}

if (theme_toggle) {
    theme_toggle.addEventListener("click", toggleTheme)
}

if (reset_data_btn) {
    reset_data_btn.addEventListener("click", resetAllData)
}

// toggle form
reg_btn.addEventListener("click", (e) => {
    login.style.display = "none";
    register.style.display = "flex";
})
log_btn.addEventListener("click", (e) => {
    login.style.display = "flex";
    register.style.display = "none";
})

log_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user_input = {
        username: log_form.username.value.trim(),
        password: log_form.password.value.trim(),
    }
    const user = JSON.parse(localStorage.getItem(user_input.username))
    if (!user) {
        console.log("user not found!");
        
        return;
    }
    if (user_input.username === user.username && user_input.password === user.password) {
        dashboard.style.display = "flex";
        login.style.display = "none";
        register.style.display = "none";
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("currentuser", JSON.stringify(user));
        log_form.reset();
    } else {
        console.log("Chora Gando Thai Gayo!");
        localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("currentuser");
        
    }
})
reg_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        username: reg_form.username.value,
        email: reg_form.email.value,
        password: reg_form.password.value,
    }
    if (localStorage.getItem(user.username)) {
        console.log("User already exists!")
        return;
    }
    localStorage.setItem(user.username, JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("currentuser", JSON.stringify(user));
    reg_form.username.value = "";
    reg_form.email.value = "";
    reg_form.password.value = "";
    isUserLoggedIn();
    reg_form.reset();
    
})

logout.addEventListener("click", (e) => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentuser");
    isUserLoggedIn();
})

transaction_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = transaction_form.title.value.trim()
    const type = transaction_form.type.value
    const amount = transaction_form.amount.value.trim()
    const date = transaction_form.date.value
    const description = transaction_form.description.value.trim()

    if (!title || !amount || !date) {
        console.log("Please fill all fields")
        return
    }

    const transaction = {
        title: title,
        type: type,
        amount: amount,
        date: date,
        description: description
    }

    const currentUser = JSON.parse(localStorage.getItem("currentuser"))
    let userKey = "transactions"

    if (currentUser && currentUser.username) {
        userKey = "transactions-" + currentUser.username
    }

    const savedTransactions = JSON.parse(localStorage.getItem(userKey)) || []
    savedTransactions.push(transaction)
    localStorage.setItem(userKey, JSON.stringify(savedTransactions))

    transaction_form.reset()
    closeTransactionModal()
    updateTransactionSummary()
})