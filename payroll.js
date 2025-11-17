let payroll = [];

    function addEmployee() {
        let name = document.getElementById("name").value;
        let days = Number(document.getElementById("days").value);
        let rate = Number(document.getElementById("rate").value);
        let deduction = Number(document.getElementById("deduction").value);

        let gross = days * rate;
        let net = gross - deduction;

        let employee = {
            name: name,
            days: days,
            rate: rate,
            gross: gross,
            deduction: deduction,
            net: net
        };

        payroll.push(employee);
        displayPayroll();
    }

function deleteEmployee() {
    let line = Number(document.getElementById("deleteLine").value);

    if (line >= 1 && line <= payroll.length) {
        payroll.splice(line - 1, 1);
    }

    document.getElementById("deleteLine").value = ""; 
    displayPayroll();
}

    function displayPayroll() {
        let table = document.getElementById("payrollTable");
        table.innerHTML = "";

        for (let i = 0; i < payroll.length; i++) {
            let row = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${payroll[i].name}</td>
                    <td>${payroll[i].days}</td>
                    <td>${payroll[i].rate}</td>
                    <td>${payroll[i].gross}</td>
                    <td>${payroll[i].deduction}</td>
                    <td>${payroll[i].net}</td>
                </tr>
            `;
            table.innerHTML += row;
        }
    }