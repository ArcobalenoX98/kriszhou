// 获取音频元素和按钮
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

// 初始化：默认播放
music.muted = false;
music.play();
let isPlaying = true;


// 切换播放/暂停
musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    music.pause(); // 暂停音乐
    musicToggle.textContent = '🔇'; // 更改按钮图标为静音
  } else {
    music.play(); // 播放音乐
    musicToggle.textContent = '🎵'; // 更改按钮图标为音乐
  }
  isPlaying = !isPlaying; // 更新播放状态
});




document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const categories = document.querySelectorAll('.portfolio-category');

    //active article default
    const defaultCategory = document.getElementById('articles');
    categories.forEach(category => category.classList.remove('active'));
    if(defaultCategory){
      defaultCategory.classList.add('active');
    }
    

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
    
            // 隐藏所有分类内容
            categories.forEach(cat => {
                cat.classList.remove('active');
                cat.style.display = 'none';
            });
    
            // 显示当前分类内容
            const activeCategory = document.getElementById(category);
            if (activeCategory) {
                activeCategory.classList.add('active');
                activeCategory.style.display = 'block'; //show the current content
            }
        });
    });


    const imagesContainer = document.getElementById('images');

    // 模拟加载更多图片的函数
    function loadMoreImages() {
        for (let i = 0; i < 6; i++) {
            const img = document.createElement('img');
            img.src = `image${Math.floor(Math.random() * 10) + 1}.jpg`; // 随机生成图片路径
            img.alt = `Random Image`;
            img.classList.add('image-item');
            imagesContainer.appendChild(img);
        }
    }

    // 滚动到底部时加载更多图片
    imagesContainer.addEventListener('scroll', () => {
        if (imagesContainer.scrollTop + imagesContainer.clientHeight >= imagesContainer.scrollHeight) {
            loadMoreImages(); // 加载新图片
        }
    });
});

console.log("Script loaded");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");
    const defaultCategory = document.getElementById('articles');
    if (defaultCategory) {
        console.log("Activating default category");
        defaultCategory.classList.add('active');
    }
});