// Utility function to delay execution for a specified time
export default function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time));
}