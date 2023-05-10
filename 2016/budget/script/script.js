const billsTable = document.getElementById('billsTable');
const miscExpTable = document.getElementById('miscExpenseTable');
const budgetTable = document.getElementById('budgetGoalsTable');
const balanceTable = document.getElementById('balanceTable');
const addSelect = document.getElementById('addSelect');
const calculateExpenses = document.getElementById('calculateBtn');
let addSelectOption = addSelect.selectedIndex;
let billsStored = JSON.parse(localStorage.getItem('billsData'));
let miscExpStored = JSON.parse(localStorage.getItem('miscExpData'));
let budgetStored = JSON.parse(localStorage.getItem('budgetData'));
let balanceGroup = [];
let balanceRow = 1;
let billRow = 1;
let miscExpRow = 1;
let budgetRow = 1;
let name, date, amount;
let miscExpListTotal = 0;



function cellInput(tableName, nameItem, dateItem, payItem, rowVar) {
    let row = tableName.insertRow(rowVar);
    var cell = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell.innerHTML = '<input type="checkbox">'
    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = amount;
    cell1.classList.add(nameItem);
    cell2.classList.add(dateItem);
    cell3.classList.add(payItem);
    cell.style.width = '50px';
    cell1.style.width = '50%';
    cell2.style.width = '50%';
    cell3.style.width = '50%';
    cell3.style.textAlign = 'right';
}

function insertBudget() {
    name = document.getElementById('budgetName').value;
    amount = document.getElementById('budgetAmount').value;
    let row = budgetTable.insertRow(budgetRow);
    var cell = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell.innerHTML = '<input type="checkbox">'
    cell1.innerHTML = name;
    cell2.innerHTML = amount;
    cell.classList.add('delBtn');
    cell1.classList.add('nameOfBudget');
    cell2.classList.add('budgetAmount');
    cell1.style.width = '50%';
    cell2.style.width = '50%';
    cell.style.width = '50px';
    cell2.style.textAlign = 'right';
    budgetRow++;
    document.getElementById('budgetName').value = '';
    document.getElementById('budgetAmount').value = '';
    cancel('addBudgetInput');
    saveData();
}

function insertBalance() {
    let balanceSummary = budgetStored.filter(() => budgetStored);
    let miscExpList = miscExpStored.filter(() => miscExpStored)
    let checkMisc = balanceSummary.find(element => {
        return element.name === 'misc'
    });
    for (i = 0; i < balanceSummary.length; i++) {
        for (index = 0; index < miscExpList.length; index++) {
            if (balanceSummary[i].name === miscExpList[index].name) {

                miscExpList.splice(index, 1);
            }
        }
    }

    if (checkMisc === undefined) {
        var misc = {
            name: 'misc',
            amount: 0
        }
        balanceSummary.push(misc);
    }

    for (let i = 0; i < balanceSummary.length; i++) {
        let filter = billsStored.filter(bill => {
            return bill.name == balanceSummary[i].name;
        });
        let index = 0;
        filter.forEach(() => {
            let balSumAmt = balanceSummary[i].amount
            let filtAmt = filter[index].amount;
            balanceSummary[i].amount = balSumAmt - filtAmt;
            index++;
        });
    }

    for (let i = 0; i < balanceSummary.length; i++) {
        let filter = miscExpStored.filter(exp => {
            return exp.name == balanceSummary[i].name;
        });
        let index = 0;
        filter.forEach(() => {
            let balSumAmt = balanceSummary[i].amount
            let filtAmt = filter[index].amount;
            balanceSummary[i].amount = balSumAmt - filtAmt;
            index++;
        });
    }
    for (i = 0; i < miscExpList.length; i++) {
        miscExpListTotal = miscExpListTotal - miscExpList[i].amount;
    }

    misc = balanceSummary.find(element => {
        return element.name === 'misc'
    });

    if (misc) {
        misc.amount = parseFloat(misc.amount) + miscExpListTotal;
    } else {
        misc.amount = 0 - miscExpListTotal;
    }


    for (let i = 0; i < balanceSummary.length; i++) {
        name = balanceSummary[i].name;
        amount = balanceSummary[i].amount;
        let row = balanceTable.insertRow(balanceRow);
        var cell = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell.innerHTML = name;
        cell2.innerHTML = amount;
        cell.style.width = '50%';
        cell2.style.width = '50%';
        cell2.style.textAlign = 'right';
        cell.classList.add('nameOfBalance');
        cell2.classList.add('balanceAmount');
        budgetRow++;

    }

}

function insertBill() {
    name = document.getElementById('billName').value;
    date = document.getElementById('billDate').value;
    amount = document.getElementById('billAmount').value;
    cellInput(billsTable, 'nameOfBill', 'billDateDue', 'amountToPay', billRow);
    billRow++;
    hideInput('billName', 'billDate', 'billAmount', 'billInput');
    saveData();
}

function insertMiscExp() {
    name = document.getElementById('miscExpName').value;
    date = document.getElementById('miscExpDate').value;
    amount = document.getElementById('miscExpAmount').value;
    cellInput(miscExpTable, 'nameMiscExp', 'dateMiscExp', 'amountMiscExp', miscExpRow);
    miscExpRow++;
    hideInput('miscExpName', 'miscExpDate', 'miscExpAmount', 'miscExpInput');
    saveData();
}

function selectOptionAdd() {
    if (document.getElementById("addBill").selected) {
        showInput('billInput')
    } else if (document.getElementById("addMiscExp").selected) {
        showInput('miscExpInput')
    } else if (document.getElementById("addBudget").selected) {
        showInput('addBudgetInput')
    } else {}
}
//make delete button check for checked checkbox
//make delete button ask 'are you sure you want to delete?'
//delete selected checkmarked rows

function deleteBtn() {
    for (let i = 1; i < billRow; i++) {
        if (billsTable.rows[i].cells[0].children[0].checked === true) {
            billsTable.deleteRow(i)
            billRow--;
        }
    }

    for (let index = 1; index < budgetRow; index++) {
        if (budgetTable.rows[index].cells[0].children[0].checked === true) {
            budgetTable.deleteRow(index)
            budgetRow--;
        }
    }

    for (let index = 1; index < miscExpRow; index++) {
        if (miscExpTable.rows[index].cells[0].children[0].checked === true) {
            miscExpTable.deleteRow(index)
            miscExpRow--;
        }
    }
}

function showInput(input) {
    document.getElementsByClassName(input)[0].style.visibility = 'visible';
    document.getElementsByClassName(input)[0].style.display = 'initial';
    document.getElementsByClassName(input)[1].style.visibility = 'visible';
    document.getElementsByClassName(input)[1].style.display = 'initial';
    document.getElementsByClassName(input)[2].style.visibility = 'visible';
    document.getElementsByClassName(input)[2].style.display = 'initial';
    document.getElementsByClassName(input)[3].style.visibility = 'visible';
    document.getElementsByClassName(input)[3].style.display = 'initial';
    document.getElementsByClassName(input)[4].style.visibility = 'visible';
    document.getElementsByClassName(input)[4].style.display = 'initial';

}

function hideInput(name, date, amount, input) {
    document.getElementById(name).value = '';
    document.getElementById(date).value = '';
    document.getElementById(amount).value = '';
    cancel(input)
}

function cancel(input) {
    document.getElementsByClassName(input)[0].style.visibility = 'invisible';
    document.getElementsByClassName(input)[0].style.display = 'none';
    document.getElementsByClassName(input)[1].style.visibility = 'invisible';
    document.getElementsByClassName(input)[1].style.display = 'none';
    document.getElementsByClassName(input)[2].style.visibility = 'invisible';
    document.getElementsByClassName(input)[2].style.display = 'none';
    document.getElementsByClassName(input)[3].style.visibility = 'invisible';
    document.getElementsByClassName(input)[3].style.display = 'none';
    document.getElementsByClassName(input)[4].style.visibility = 'invisible';
    document.getElementsByClassName(input)[4].style.display = 'none';
}
/**
 * Pulls the created classes values, inserts them into arrays
 * Pushes the arrays into JSON strings then into local storage
 * Clears the old data, saves the new information that is on the screen.
 **/
function saveData() {
    let billsTitle = document.querySelectorAll('.nameOfBill');
    let billsDue = document.querySelectorAll('.billDateDue');
    let billsPay = document.querySelectorAll('.amountToPay');
    let billsStorage = [];
    let miscExpTitle = document.querySelectorAll('.nameMiscExp');
    let miscExpDate = document.querySelectorAll('.dateMiscExp');
    let miscExpPay = document.querySelectorAll('.amountMiscExp');
    let miscExpStorage = [];
    let budgetTitle = document.querySelectorAll('.nameOfBudget');
    let budgetAmount = document.querySelectorAll('.budgetAmount');
    let budgetStorage = [];

    for (let i = 0; i < budgetTitle.length; i++) {
        budgetStorage.push({
            name: budgetTitle[i].innerText,
            amount: budgetAmount[i].innerText
        });

    }
    for (let i = 0; i < billsTitle.length; i++) {
        billsStorage.push({
            name: billsTitle[i].innerText,
            date: billsDue[i].innerText,
            amount: billsPay[i].innerText
        });
    }
    for (let i = 0; i < miscExpTitle.length; i++) {
        miscExpStorage.push({
            name: miscExpTitle[i].innerText,
            date: miscExpDate[i].innerText,
            amount: miscExpPay[i].innerText
        });
    }

    localStorage.setItem("budgetData", JSON.stringify(budgetStorage));
    localStorage.setItem("billsData", JSON.stringify(billsStorage));
    localStorage.setItem('miscExpData', JSON.stringify(miscExpStorage));
    billShowTotal();
    miscExpShowTotal();
    location.reload();

}

function onScreenLoad() {
    if (budgetStored !== null) {
        for (let i = 0; i < budgetStored.length; i++) {
            let row = budgetTable.insertRow(budgetRow);
            let cell = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            budgetRow++;
            cell.innerHTML = '<input type="checkbox">';
            cell1.innerHTML = budgetStored[i].name;
            cell2.innerHTML = budgetStored[i].amount;
            cell.style.width = '50px';
            cell1.style.width = '50%';
            cell2.style.width = '50%';
            cell2.style.textAlign = 'right';
            cell1.classList.add('nameOfBudget');
            cell2.classList.add('budgetAmount');
            cell.classList.add('delBtn');
        }
    }

    if (billsStored !== null) {
        for (let i = 0; i < billsStored.length; i++) {
            let row = billsTable.insertRow(billRow);
            let cell = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            let cell3 = row.insertCell(3);
            billRow++;
            cell1.innerHTML = billsStored[i].name;
            cell2.innerHTML = billsStored[i].date;
            cell3.innerHTML = billsStored[i].amount;
            cell.innerHTML = '<input type="checkbox">';
            cell.classList.add('delBtn');
            cell.style.width = '50px';
            cell1.style.width = '50%';
            cell2.style.width = '50%';
            cell3.style.width = '50%';
            cell3.style.textAlign = 'right';
            cell1.classList.add('nameOfBill');
            cell2.classList.add('billDateDue');
            cell3.classList.add('amountToPay');
        }
    }

    if (miscExpStored !== null) {
        for (let i = 0; i < miscExpStored.length; i++) {
            let row = miscExpTable.insertRow(miscExpRow);
            let cell = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            let cell3 = row.insertCell(3);
            miscExpRow++;
            cell1.innerHTML = miscExpStored[i].name;
            cell2.innerHTML = miscExpStored[i].date;
            cell3.innerHTML = miscExpStored[i].amount;
            cell.innerHTML = '<input type="checkbox">';
            cell.style.width = '50px';
            cell1.style.width = '50%';
            cell2.style.width = '50%';
            cell3.style.width = '50%';
            cell3.style.textAlign = 'right';
            cell.classList.add('delBtn');
            cell1.classList.add('nameMiscExp');
            cell2.classList.add('dateMiscExp');
            cell3.classList.add('amountMiscExp');
        }
    }
}

function billShowTotal() {
    if (billsStored !== null) {
        let total = 0;
        for (let i = 0; i < billsStored.length; i++) {
            total = total + parseFloat(billsStored[i].amount);
            document.getElementById('billTotalBal').innerHTML = total;
        }
        document.getElementById('billTotalBal').innerHTML = total;
    }
}

function miscExpShowTotal() {
    if (miscExpStored !== null) {
        let total = 0;
        for (let i = 0; i < miscExpStored.length; i++) {
            total = total + parseFloat(miscExpStored[i].amount);
            document.getElementById('miscExpTotalBal').innerHTML = total;
        }
        document.getElementById('miscExpTotalBal').innerHTML = total;
    }
}


function exportCsv(csv, filename) {
    let csvFile;
    let downloadLink;
    let filetitle = new Date();
    

    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filetitle.getMonth() + '-' + filetitle.getDay() + '-' + filetitle.getFullYear() +'.csv';

    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function exportTableToCsv(html, filename) {
    var csv = [];
    var rows = document.querySelectorAll("#budgetGoalsTable tr");
    csv.push('Budget,,')
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
		
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
		csv.push(row.join(","));		
}
csv.push('Bills,,')
var rows = document.querySelectorAll("#billsTable tr");
for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");
    
    for (var j = 0; j < cols.length; j++) 
        row.push(cols[j].innerText);
    
    csv.push(row.join(","));		
}

csv.push('Misc Expenses,,')
var rows = document.querySelectorAll("#miscExpenseTable tr");
for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");
    
    for (var j = 0; j < cols.length; j++) 
        row.push(cols[j].innerText);
    
    csv.push(row.join(","));		
}

csv.push('Balance,,')
var rows = document.querySelectorAll("#balanceTable tr");
for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");
    
    for (var j = 0; j < cols.length; j++) 
        row.push(cols[j].innerText);
    
    csv.push(row.join(","));		
}

exportCsv(csv.join("\n"), filename);
}

document.querySelector(".downloadCSV").addEventListener("click", function () {
    var html = document.querySelector("main").outerHTML;
	exportTableToCsv(html, "table.csv");
});

function clearData() {
    localStorage.clear();
    location.reload();
}



miscExpShowTotal();
billShowTotal();
miscExpShowTotal();
onScreenLoad();