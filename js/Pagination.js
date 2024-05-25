document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 8;
    const tableBody = document.getElementById('table-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const paginationNumbers = document.querySelectorAll('.page-number');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    
    let currentPage = 1;
    const totalPages = Math.ceil(rows.length / itemsPerPage);

    function displayPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? '' : 'none';
        });

        paginationNumbers.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.page-number[data-page="${page}"]`).classList.add('active');

        prevPageBtn.disabled = page === 1;
        nextPageBtn.disabled = page === totalPages;
    }

    paginationNumbers.forEach(btn => {
        btn.addEventListener('click', function () {
            currentPage = Number(this.getAttribute('data-page'));
            displayPage(currentPage);
        });
    });

    prevPageBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    nextPageBtn.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    });

    displayPage(currentPage);
});
