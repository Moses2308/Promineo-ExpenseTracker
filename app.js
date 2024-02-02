class Expense {
  constructor(name, month, amount) {
    this.name = name;
    this.month = month;
    this.amount = amount;
  }
}

const expenses = [];
const headers = ["Expense", "Month", "Amount"];

function createTableStructure() {
  const table = document.createElement("table");
  table.setAttribute("class", "table table-striped table-dark");

  const header = document.createElement("thead");
  header.setAttribute("id", "tableHead");

  const body = document.createElement("tbody");
  body.setAttribute("id", "tableBody");

  table.appendChild(header);
  table.appendChild(body);

  const container = document.getElementById("table-container");
  container.appendChild(table);
}

function createTableHeaders(headers) {
  const headerRow = document.createElement("tr");
  for (item of headers) {
    const newHeader = document.createElement("th");
    newHeader.innerText = item;
    headerRow.appendChild(newHeader);
  }
  let head = document.getElementById("tableHead");
  head.appendChild(headerRow);
}

function populateTable() {
  clearTable();
  for (item of expenses) {
    const newRow = document.createElement("tr");

    const newExpense = document.createElement("td");
    const newMonth = document.createElement("td");
    const newAmount = document.createElement("td");

    newExpense.innerText = item.name;
    newMonth.innerText = item.month;
    newAmount.innerText = item.amount;

    newRow.appendChild(newExpense);
    newRow.appendChild(newMonth);
    newRow.appendChild(newAmount);

    const body = document.getElementById("tableBody");
    body.appendChild(newRow);
  }
  createTotalRow();
}
function createTotalRow() {
  const newRow = document.createElement("tr");
  const total = document.createElement("td");
  total.innerText = "TOTAL :";
  newRow.appendChild(total);

  const spacer = document.createElement("td");
  spacer.innerText = "---";
  newRow.appendChild(spacer);

  const totalAmount = document.createElement("td");
  let sum = 0;
  for (expense of expenses) {
    sum += parseInt(expense.amount);
  }
  totalAmount.innerText = sum.toString();
  newRow.appendChild(totalAmount);
  document.getElementById("tableBody").appendChild(newRow);
}

function clearTable() {
  const body = document.getElementById("tableBody");
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}

createTableStructure();
createTableHeaders(headers);

let form = document.getElementById("input-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let expenseName = document.getElementById("expense");
  let month = document.getElementById("month");
  let cost = document.getElementById("cost");

  if (expenseName.value && month.value && cost.value) {
    expenses.push(new Expense(expenseName.value, month.value, cost.value));
  }

  expenseName.value = "";
  month.value = "";
  cost.value = "";
  populateTable();
});
