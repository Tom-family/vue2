// 适用于移动端的适配
function setRem() {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = width / 10 + "px";
}
setRem();
window.onresize = function () {
  setRem();
};
