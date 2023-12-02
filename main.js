// Click event listener for creating a dot-shaped element
  document.addEventListener('click', (event) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    document.body.appendChild(dot);
  });

  // Function to create a table
  function createTable(n) {
    const table = document.createElement('table');
    document.body.appendChild(table);

    for (let i = 0; i < n; i++) {
      const row = table.insertRow();
      for (let j = 0; j < n; j++) {
        const cell = row.insertCell();
        cell.textContent = i * n + j + 1;
      }
    }

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Row';
    addButton.addEventListener('click', () => addRow(n, table));
    document.body.appendChild(addButton);
  }

  // Function to add a row to the table
  function addRow(n, table) {
    const newRow = table.insertRow();
    const lastRowIndex = table.rows.length - 1;

    for (let i = 0; i < n; i++) {
      const cell = newRow.insertCell();
      cell.textContent = lastRowIndex * n + i + 1;
    }
  }

  // Example usage
  createTable(5);
