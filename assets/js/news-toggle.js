document.addEventListener('DOMContentLoaded', function () {
    const rail = document.querySelector('.news-rail');
    if (!rail) return;
    const btn = rail.querySelector('.news-toggle');
    if (!btn) return;

    function update() {
        const collapsed = rail.getAttribute('data-collapsed') === 'true';
        btn.textContent = collapsed ? 'Show all news' : 'Show less';
    }
    update();

    btn.addEventListener('click', function () {
        const collapsed = rail.getAttribute('data-collapsed') === 'true';
        rail.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
        update();
    });
});
