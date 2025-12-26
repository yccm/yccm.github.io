document.addEventListener('DOMContentLoaded', function() {
    // 只查找news-container内的新闻项
    const newsContainer = document.querySelector('.news-container');
    if (!newsContainer) return;
    
    const newsItems = newsContainer.querySelectorAll('.news-item');
    const toggleContainer = newsContainer.querySelector('.news-toggle-container');
    
    // 如果新闻项多于6个，则隐藏多余的
    if (newsItems.length > 6) {
        // 显示展开/收起按钮
        const toggleButton = document.getElementById('toggle-news');
        if (!toggleButton) return;
        
        toggleButton.style.display = 'inline-block';
        
        // 从第7条开始隐藏新闻（索引从0开始，所以这里是6）
        for (let i = 6; i < newsItems.length; i++) {
            newsItems[i].classList.add('hidden');
        }
        
        // 确保toggle-container紧跟在第6条新闻后面
        if (newsItems.length >= 6 && toggleContainer) {
            // 如果toggle-container不在正确的位置，则移动它
            const correctPosition = newsItems[5].nextElementSibling !== toggleContainer;
            if (correctPosition && newsItems[5].parentNode) {
                newsItems[5].parentNode.insertBefore(toggleContainer, newsItems[6]);
            }
        }
        
        // 处理按钮点击事件
        toggleButton.addEventListener('click', function() {
            // 只获取news-container内的隐藏项
            const hiddenItems = newsContainer.querySelectorAll('.news-item.hidden');
            
            // 如果有隐藏项，则展开全部
            if (hiddenItems.length > 0) {
                hiddenItems.forEach(item => item.classList.remove('hidden'));
                toggleButton.textContent = 'Show Less News';
                
                // 移动按钮到所有新闻的最后
                if (newsItems.length > 0 && toggleContainer) {
                    const lastNews = newsItems[newsItems.length - 1];
                    if (lastNews.nextElementSibling !== toggleContainer && lastNews.parentNode) {
                        lastNews.parentNode.appendChild(toggleContainer);
                    }
                }
            } 
            // 如果全部已展开，则折叠
            else {
                for (let i = 6; i < newsItems.length; i++) {
                    newsItems[i].classList.add('hidden');
                }
                toggleButton.textContent = 'Show More News';
                
                // 移动按钮到第6条新闻后面
                if (newsItems.length >= 6 && toggleContainer) {
                    if (newsItems[5].nextElementSibling !== toggleContainer && newsItems[5].parentNode) {
                        newsItems[5].parentNode.insertBefore(toggleContainer, newsItems[6]);
                    }
                }
            }
        });
    }
}); 