$(document).ready(function() {
    $('.person-slider').slick({
        arrows:false,
        dots:true
    });

    $('.test-slick').slick({
        arrows:false,
        dots:true
    });

    $('.news-slick').slick({
        arrows:false,
        dots:true
    });
});

let btnsFilterContainer = document.querySelector('.filter'); 
 let removeClass = function(arr, className){
     arr
     .filter(btn => btn.classList.contains(className))
     .map(btn => btn.classList.remove(className));
 };
 
 btnsFilterContainer.addEventListener('click', function(e) {
     let target = e.target;
     if (!e.target.closest('button')) return;
     let btn = e.target.closest('button');
     if (btn.classList.contains('active')) return;
     let btns = document.querySelectorAll('.filter button');
     
 let arrBtns = Array.prototype.slice.call(btns);
 
     removeClass(arrBtns, 'active');
 
     btn.classList.add('active');
 
     let btnId = btn.id;
     let blocks = document.querySelectorAll('.block')
     let arrBlocks = Array.prototype.slice.call(blocks);
 
     removeClass(arrBlocks, 'hide');
     if (btnId == 'all') return;
 
     arrBlocks
     .filter(block => (block.dataset.var != btnId))
     .map(block => block.classList.add('hide'));
 });
