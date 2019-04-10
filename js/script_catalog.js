var icon_block = document.querySelector(".icon-down-dir");
var select = document.querySelector(".sort-span");

select.addEventListener("mouseover", function (evt) {
  icon_block.classList.remove("icon-down-dir");
  icon_block.classList.add("icon-down-dir-black");
  console.log('мышка наведена');
});

select.addEventListener("mouseout", function (evt) {
  icon_block.classList.add("icon-down-dir");
  icon_block.classList.remove("icon-down-dir-black");
  console.log('мышка наведена');
});