import { Readable } from "stream"

export default function bufferToStream(buffer) {
  var stream = new Readable()
  stream.push(buffer)
  stream.push(null)

  return stream
}
