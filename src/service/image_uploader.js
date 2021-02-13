const url = process.env.REACT_APP_CLOUDINARY_API_KEY;

class ImageUploader {
  async imageUpload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "bgva3rv2");

    const result = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });
    return await result.json();
  }
}

export default ImageUploader;
