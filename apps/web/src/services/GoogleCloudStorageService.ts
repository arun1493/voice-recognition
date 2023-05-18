import { Storage } from "@google-cloud/storage";

class GoogleCloudService {
  instance: Storage;
  bucket: any;

  constructor(bucket: string) {
    this.instance = new Storage({
      projectId: process.env.GOOGLE_PROJECT_ID,
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
    });
    this.bucket = this.instance.bucket(bucket);
  }

  fetchFile(fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const file = this.bucket.file(fileName);
      file
        .download()
        .then((res) => {
          const results = JSON.parse(res?.[0]?.toString("utf8"));
          resolve(results);
        })
        .catch((e) => reject(e));
    });
  }

  uploadFile(buffer: Buffer, fileName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const blob = this.bucket.file(fileName);
      const blobStream = blob.createWriteStream();
      blobStream.on("finish", () => {
        console.log("File uploaded successful", fileName);
        resolve();
      });
      blobStream.on("error", (error) => {
        reject(error);
      });

      blobStream.end(buffer);
    });
  }
}

export default GoogleCloudService;
