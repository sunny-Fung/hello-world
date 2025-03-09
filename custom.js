function addCustomFeature() {
  const table = document.querySelector('.tiny-table');
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const button = document.createElement('button');
    button.textContent = '详情';
    button.addEventListener('click', () => {
      const data = Array.from(row.children).map(cell => cell.textContent);
      alert(`详情: ${data.join(', ')}`);
    });

    const actionCell = document.createElement('td');
    actionCell.appendChild(button);
    row.appendChild(actionCell);
  });
}

addCustomFeature()
