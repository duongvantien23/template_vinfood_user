document.addEventListener('DOMContentLoaded', function () {
    var defaultSortType = localStorage.getItem('selectedSortType') || 'SPTraiCay';

    var sortLinks = document.querySelectorAll('.sort-click a');

    // Duyệt qua tùy chọn và cập nhật trạng thái đã chọn
    sortLinks.forEach(function (link) {
        var sortType = link.getAttribute('data-sort');

        if (sortType === defaultSortType) {
            link.classList.add('selected-sort');
            link.querySelector('input').checked = true;
        }
    });

    // Thêm sự kiện click cho tùy chọn sắp xếp
    sortLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var sortType = link.getAttribute('data-sort');

            localStorage.setItem('selectedSortType', sortType);

            
            sortLinks.forEach(function (otherLink) {
                otherLink.classList.remove('selected-sort');
            });

         
            link.classList.add('selected-sort');

            var newURL = sortType + '.html';

            window.location.href = newURL;
        });
    });
});





