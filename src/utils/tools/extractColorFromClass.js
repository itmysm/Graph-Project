export default function extractColorFromClass(className) {
  setTimeout(() => {
    const element = document.createElement("b");
    element.className = className;
    document.body.appendChild(element);
    const color = getComputedStyle(element).backgroundColor;
    document.body.removeChild(element);
    return color;
  }, 4000);
}