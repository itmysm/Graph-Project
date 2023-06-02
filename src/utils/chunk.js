// for reading large files we need chunks
const defaultChunkSize = (1024 * 1024) * 5; // 5MB

export default class Chunks {
  constructor(file, chunkSize = defaultChunkSize) {
    this.file = file;
    this.chunkSize = chunkSize;
    this.offset = 0;
    this.chunkReader = new FileReader();
  }

  process() {
    let fileSize = this.file.size;
    this.chunkReader.onload = (e) => {
      if (e.target.error == null) {
        const chunk = new Uint8Array(e.target.result);

        this.onChunkRead(chunk, this.offset, this.chunkSize, () => {
          this.offset += this.chunkSize;

          if (this.offset >= fileSize) {
            // Entire file has been read
            this.onReadComplete();
          } else {
            // Read the next chunk
            this.readNextChunk();
          }
        });
      } else {
        console.error('Error reading chunk: ', e.target.error);
      }
    };

    // Start reading the first chunk
    this.readNextChunk();
  }

  readNextChunk() {
    const fileSlice = this.file.slice(
      this.offset,
      this.offset + this.chunkSize
    );
    this.chunkReader.readAsArrayBuffer(fileSlice);
  }

  onChunkRead(chunk, offset, chunkSize, callback) {
    const decoder = new TextDecoder();
    const chunkData = decoder.decode(chunk);
  
    console.log('Chunk content:', chunkData);

    // do the operation here
    setTimeout(() => {
      console.log('done');
      callback(); // Call the callback to proceed to the next chunk
    }, 4000);
  }

  onReadComplete() {
    console.log('File reading complete');
  }
}
