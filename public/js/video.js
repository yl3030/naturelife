let video = document.getElementsByClassName("video");
let video_1 = document.getElementById("videoContent-1");
video_1.play();
let videoLength = video.length;
$("video").each(function(){
    this.addEventListener('ended', function(){
        let index = $(this).index() + 1;
        if(index < videoLength) {

            let listItem = this.getAttribute('data-list');
            let targetItem = document.getElementById(listItem);
            targetItem.classList.remove('active');

            this.classList.remove('active');
            let nextVideo = this.nextElementSibling;
            nextVideo.play();
            nextVideo.classList.add('active');
                    
            let nextListItem = this.nextElementSibling.getAttribute('data-list');
            let nextTargetItem = document.getElementById(nextListItem);
            nextTargetItem.classList.add('active');
        }
    })
})

let waterProofItem = document.getElementsByClassName("waterproof_list_item");
$(".waterproof_list_item").each(function(){
    $(this).click(function(){
        $(this).addClass("active").parents("li").siblings("li").find(".waterproof_list_item").removeClass("active");
        $(".video").each(function(){
            $(this).removeClass("active");
            this.pause();
        })
    })
    this.addEventListener('click', function(){
        let targetVideo = this.getAttribute("data-video");
        let targetVideoItem = document.getElementById(targetVideo);
        targetVideoItem.classList.add('active');
        targetVideoItem.load();
        targetVideoItem.play();
    })
})
            