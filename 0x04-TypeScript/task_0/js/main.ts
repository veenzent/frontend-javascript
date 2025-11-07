interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London",
};

const studentsList: Array<Student> = [student1, student2];

// Create table and header
const table: HTMLTableElement = document.createElement("table");
//   table.style.borderCollapse = 'collapse';
//   table.style.width = '100%';

const thead: HTMLTableSectionElement = document.createElement("thead");
const headerRow: HTMLTableRowElement = document.createElement("tr");

const thName: HTMLTableCellElement = document.createElement("th");
thName.textContent = "First Name";
//   thName.style.textAlign = 'left';
//   thName.style.padding = '8px';

const thLocation: HTMLTableCellElement = document.createElement("th");
thLocation.textContent = "Location";
//   thLocation.style.textAlign = 'left';
//   thLocation.style.padding = '8px';

headerRow.appendChild(thName);
headerRow.appendChild(thLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement("tr");

    const tdName: HTMLTableCellElement = document.createElement("td");
    tdName.textContent = student.firstName;
    // tdName.style.padding = '8px';

    const tdLocation: HTMLTableCellElement = document.createElement("td");
    tdLocation.textContent = student.location;
    // tdLocation.style.padding = '8px';

    row.appendChild(tdName);
    row.appendChild(tdLocation);
    tbody.appendChild(row);
});

table.appendChild(tbody);

// Append the table to the body (or to a container element)
document.body.appendChild(table);
// });
