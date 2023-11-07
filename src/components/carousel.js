function createCarousel(carouselData, containerId) {
    let carouselBody = document.getElementById(containerId);
    for (let i = 0; i < carouselData.length; i++) {
        let divClass = document.createElement('div');
        divClass.className = 'hidden duration-700 ease-in-out';
        divClass.setAttribute('data-carousel-item', '');
        let imgClass = document.createElement('img');
        imgClass.className = 'absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2';
        imgClass.src = carouselData[i];
        imgClass.alt = '...';
        divClass.appendChild(imgClass);
        carouselBody.appendChild(divClass);
    }
}

function createTable(tableData, containerId) {
    let tableBody = document.getElementById(containerId);
    for (let i = 0; i < tableData.length; i++) {
      let row = document.createElement('tr');
      let cell1 = document.createElement('td');
      let cell2 = document.createElement('td');
      cell1.className = 'px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200';
      cell2.className = 'px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200';
      cell1.textContent = i + 1;
      for (let j = 0; j < tableData[i].length; j++) {
        if (j > 0) {
          cell2.appendChild(document.createElement('br'));
        }
        cell2.appendChild(document.createTextNode(tableData[i][j]));
      }
      row.appendChild(cell1);
      row.appendChild(cell2);
      tableBody.appendChild(row);
      if (i < tableData.length - 1) {
        let dividerRow = document.createElement('tr');
        let dividerCell = document.createElement('td');
        dividerCell.colSpan = 2;
        dividerCell.className = 'h-px bg-gray-200 dark:bg-gray-700';
        dividerRow.appendChild(dividerCell);
        tableBody.appendChild(dividerRow);
      }
    }
}