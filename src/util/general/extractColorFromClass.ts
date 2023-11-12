import { colord } from "colord";

export default function extractColorFromClass(colorName: string): string {
  const element = document.createElement("b");
  element.className = colorName;
  document.body.appendChild(element);
  const color = getComputedStyle(element).backgroundColor || "#fff";
  document.body.removeChild(element);
  return colord(color).toHex()
}
