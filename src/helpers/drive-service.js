const { google } = require('googleapis')

export default class DriveService {
  driveClient;
  constructor() {
    console.log({
      project_id: process.env.PROJECT_ID_GOOGLE,
      private_key_id: process.env.PRIVATE_KEY_ID_GOOGLE,
      private_key: process.env.PRIVATE_KEY_GOOGLE,
      client_email: process.env.CLIENT_EMAIL_GOOGLE,
      client_id: process.env.CLIENT_ID_GOOGLE,
      client_x509_cert_url: process.env.CLIENT_CERT_URL_GOOGLE
    })
    this.driveClient = this.createDriveClient({
      type: "service_account",
      project_id: process.env.PROJECT_ID_GOOGLE,
      private_key_id: process.env.PRIVATE_KEY_ID_GOOGLE,
      private_key: process.env.PRIVATE_KEY_GOOGLE,
      client_email: process.env.CLIENT_EMAIL_GOOGLE,
      client_id: process.env.CLIENT_ID_GOOGLE,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.CLIENT_CERT_URL_GOOGLE,
      universe_domain: "googleapis.com"
    })
  }
  //
  createDriveClient(key) {
    const client = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ["https://www.googleapis.com/auth/drive"],
      null
    )

    client.authorize((error) => {
      if (error) {
        // console.log({ error });
        return
      } else {
        // console.log('SUCCESS DRIVE');
      }
    })

    return google.drive({
      version: "v3",
      auth: client
    })
  }

  createFolder(folderName) {
    return this.driveClient.files.create({
      resource: {
        name: folderName,
        mimeType: "application/vnd.google-apps.folder"
      },
      fields: "id, name"
    })
  }

  searchFolder(folderName) {
    return new Promise((resolve, reject) => {
      this.driveClient.files.list(
        {
          q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}'`,
          fields: "files(id, name)"
        },
        (err, res) => {
          if (err) {
            return reject(err)
          }

          return resolve(res.data.files ? res.data.files[0] : null)
        }
      )
    })
  }

  saveFile(fileName, filePath, fileMimeType, folderId) {
    return this.driveClient.files.create({
      requestBody: {
        name: fileName,
        mimeType: fileMimeType,
        parents: folderId ? [folderId] : []
      },
      media: {
        mimeType: fileMimeType,
        body: filePath
      }
    })
  }

  async deleteFile(fileId) {
    return await this.driveClient.files.update({ fileId, requestBody: { trashed: true } })
  }

  async shareFile(fileId, targetUserEmail) {
    const permission = {
      type: "user",
      role: "writer",
      emailAddress: targetUserEmail // 'user@partner.com',
    }

    const result = await this.driveClient.permissions.create({
      resource: permission,
      fileId: fileId
    })

    return result
  }
}
