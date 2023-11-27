// this class read the content of uploaded file in various ways.
export class ReadFile {
  constructor() {}

  async lineByLine(file: File, callBackFunc: (line: string) => void, isTargetReached: () => boolean) {
    const fileStream = file.stream().getReader();
    const decoder = new TextDecoder();

    let partialLine: string = "";
    let targetReached = false; // Flag to track whether the target is reached

    try {
      while (!targetReached) {
        const { done, value } = await fileStream.read();

        if (done) {
          if (partialLine) callBackFunc(partialLine);
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        const lines: string[] = (partialLine + chunk).split(/\r\n|[\n\r\u2028\u2029]/g);
        partialLine = lines.pop() || "error-In_ReadFile_script"; // Save the last partial line

        for (const line of lines) {
          callBackFunc(line);
        }

        // Check if the target is reached after processing each chunk
        targetReached = isTargetReached();
      }
    } catch (error) {
      console.log(error, "A strange problem occurred! Contact the developer");
    }
  }
}
