// this class read the content of uploaded file in different

class ReadFile {
  async lineByLine(file, doSomething) {
    const fileStream = file.stream().getReader()
    const decoder = new TextDecoder();

    let partialLine = ''

    try {
      while (true) {
        const { done, value } = await fileStream.read()

        if (done) {
          if (partialLine) doSomething(partialLine)
          break;
        }

        const chunk = decoder.decode(value, { stream: true })
        const lines = (partialLine + chunk).split(/\r\n|[\n\r\u2028\u2029]/g);
        partialLine = lines.pop(); // Save the last partial line

        for (const line of lines) {
          if (doSomething(line)) return
        }
      }

    } catch (error) {
      console.log('A strange problem occurred! Contact the developer');
    }
  }
}

export default ReadFile;