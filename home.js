document.addEventListener("DOMContentLoaded", function() {
    var introSection = document.getElementById("intro");
    var title = document.querySelector(".title");
    var header = document.querySelector("header");

    // 監聽頁面滾動事件
    window.addEventListener("scroll", function() {
        var introPosition = introSection.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        // 計算滾動比例
        var scrollRatio = Math.max(0, Math.min(1, introPosition / screenPosition));

        // 檢查是否滾動到最上方
        if (introPosition <= 0) {
            // 滾動到最上方，設置透明度為完全不透明
            title.style.opacity = 1;
            header.style.background = `rgba(51, 51, 51, 1)`;
        } else {
            // 調整標題和背景的透明度
            title.style.opacity = scrollRatio*2;
            header.style.background = `rgba(51, 51, 51, ${ scrollRatio*2})`;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("#gallery .containerimage");
   
    
    // 監聽頁面滾動事件
    window.addEventListener("scroll", function() {
        var screenPosition = window.innerHeight;

        images.forEach(function(container, index) {
            var containerPosition = container.getBoundingClientRect().left;

            // 計算圖片的浮現位置和透明度
            var scrollRatio = Math.max(0, Math.min(1,(screenPosition - containerPosition) / screenPosition));

            // 調整圖片的透明度和位移效果
            container.style.opacity = scrollRatio;
            container.style.transform = `translateX(${(0.5 - scrollRatio) }px)`;
            container.style.transition = `opacity 1s, transform 1s ${index * 10}s`;
        });
    });
});