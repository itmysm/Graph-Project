let developMode = true;

export const colors = {
  reset: "\x1b[0m",
  warning: "\x1b[33m",
  info: "\x1b[34m",
  error: "\x1b[31m",
};

export function devLogger(message: string, type: "warning" | "info" | "error" | "reset" = "warning", time?: boolean): void {
  if (developMode) {
    const timestamp = new Date().toLocaleString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    console.log(`${colors[type]}[${time ? timestamp : ""}] ${message}`);
  }
}
