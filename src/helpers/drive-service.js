const { google } = require('googleapis')

export default class DriveService {
  driveClient;
  constructor() {
    this.driveClient = this.createDriveClient({
      type: "service_account",
      project_id: process.env.PROJECT_ID_GOOGLE,
      private_key_id: process.env.PRIVATE_KEY_ID_GOOGLE,
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDar5uoqv/s+Ix3\nQRtsxhMvIIElR0nB6OTPvTUv5R516fIZKfy1jKD+5M6g5uqI9hrYY4fGp67qiM52\n0yRHJP+npAhCMeM2BbrxyCJowVKEiEpvFkT7DK2XKQTGkKTMNTh8C/T+14nfvgTo\nwnnfmzeI3mf67vb9JqYIBzTqVjCnjWRKnmrSGEtLpWzjKyYixah33Qdnpo2gYeVo\nbq4e6RkwSOpFN3LGkipBOZYZ0OpUWt8G8A6vB/cnLxGNLy5qHp8Z/nShYNn2FZEk\nPwIENyVodw1Fs/Gjli7Sn57frFnXBCvjdfOo+WQLU+jUKHoROYtuKjggq5HvpTHS\nFsHcJg5DAgMBAAECggEAWYupxfWLSSn3Poe65p3u0g/RwgWAVrX6J3RW+I8tm2PZ\nveMa9u4oKGdhkrIrXDzF/lA3Eymrbp7pR++qPbWRN8Brn0tVOdQ72fA04scydlFm\nhTlNsqzc0fY6XeJxkKrEP8sXnVh9vM/Oq86iX+TrZxCG7FH4ce1m9Aeba88yKhDx\np+3ytyzyT/tMlLolmnFpkwbjYUCq6z/qAasL4BTYPvIMGYVrqaHAxLjXk+g04bqO\nOvnApO+ybK8hLH3SNjqYjGo5OwNpQPZJBV+FEVLTjDV4SIkiENlCn3DyGaTHQpmQ\nkUHhQPzlAa9wTzu9E9BRxPi2f4YBZVBekwXSLoCbDQKBgQD/Wsna3WUC7P9YN5r9\nuMdTeKeDWB+Xsuwe5K6J/EtZmpbMpmiA/Iw3Uf2pYfjk48e81+uuU+Drck2KMiAc\nTfJcVdlIe62Zj0hPYuOC72pkzUfx/2HZhrbYcgIXkwPMw5KqM4mcsjBpzyHUwsjB\nqDLDopU5hkhHkKZ3A+TDnMIxzQKBgQDbPRhoFrPjeYyjVa0H9Z6mTuwdQXsZ7kqm\nNAcQGwjupn857HcfBBKQ5+H8ul1Fvfch/1G6JBih+buHcfaoLoxJ34MAqdsRO/WE\n107BwBC37zHA/LCnj1lrtfcr+KFF9Zm0cvmluC4VQCLQqM4a2otBkMQI3FSP6C54\nwlCQzStwTwKBgQCoqTfAZxEr8IvrobautRh66quCFnevhA9vjE44d7rxMSk/fP5z\ni9u1QmOQOFTkIgswkVFq8J4UBYhvqhIJf/Z/xHhi5sXQMpJpVQC+4BHfCLPnhG4F\n9nPY3NzC42jUG61I3AedxxgxGw3WcN2XA9ib3UxBFY+yLTm2TI0SIv0lVQKBgApv\nEu1JP1BxJXdUiYKadu11ThlqV2B5jcXxLfDfSIKLG/z2uwiX2gZZctDjUbMTAmL0\n0r/oHd//kaQ1kUaZyIVvhL2QV+OvFdU3pgDkkice1CBaJlIjKV9N7rCCCbLZqHIF\nEsqHRHIwdje2APEYO45oRFwjmEatByEqJklt6kZTAoGBALllw2rd3S0XpU03UDZU\nyOWFcuhGtTHyG2fT2l3MSDBpLgdQePKckZzlNH0xGo6NIbw1DZRS9EWzMkqzPUaA\n6oaudcZXTuEQyjM6/QDbscbN/ROHfTY3pVtSnMojVUTCXJsW5dGbYYA8KWKcWhe2\nz4kd/gatBISUGOlHwaStYBNJ\n-----END PRIVATE KEY-----\n",
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
