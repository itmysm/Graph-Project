// this class read the content of uploaded file in various ways.

type CallBackFunc = {
  line: string;
  isLastItem?: boolean;
};

export class ReadFile {
  constructor() {}

  async lineByLine(file: File, callBackFunc: (line: string, isLastItem?: boolean) => void, isTargetReached?: () => boolean) {
    const fileStream = file.stream().getReader();
    const decoder = new TextDecoder();

    let partialLine: string = "";
    let targetReached = false;

    try {
      while (!targetReached) {
        const { done, value } = await fileStream.read();

        if (done) {
          if (partialLine) {
            callBackFunc(partialLine);
          }

          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        const lines: string[] = (partialLine + chunk).split(/\r\n|[\n\r\u2028\u2029]/g);

        partialLine = lines.pop(); // Save the last partial line

        for (const line of lines) {
          callBackFunc(line);
        }

        if (isTargetReached && isTargetReached()) {
          targetReached = isTargetReached();
        }
      }
    } catch (error) {
      console.log(error, "A strange problem occurred! Contact the developer");
    }
  }
}
