export default function makeAddFileProductAndImg({ productModel, bufferToStream, DriveService }) {
  return async function addFileProductAndImg ({ files, ...productInfo }) {
    const { image } = files
    const product = await productModel.create({
      ...productInfo
    })

    const driveService = new DriveService()
    const folderName = "PRODUCTS"
    let folder = await driveService.searchFolder(folderName).catch((error) => {
      console.error(error)
      return null
    })
    if (!folder) {
      folder = await driveService.createFolder(folderName)
    }
    const stream = bufferToStream(image.data)

    const fileId = await driveService
      .saveFile(
        `photo-${product._id}`,
        stream,
        // finalPath,
        stream.mimetype,
        folder.id
      )
      .catch((error) => {
        console.error(error);
      })

    await productModel.updateOne(
      { _id: product._id },
      {
        image: `https://drive.google.com/uc?export=view&id=${fileId.data.id}`
      }
    )

    console.info("File uploaded successfully!")

    return product
  }
}
