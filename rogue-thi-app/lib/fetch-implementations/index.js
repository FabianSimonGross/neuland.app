import BrowserFetchConnection from './browser-fetch'
import CapacitorFetchConnection from './capacitor-http'

/**
 * Helper class that mimics a `fetch` response.
 */
export class HttpResponse {
  constructor (status, data) {
    this.status = status
    this.data = data
  }

  async text () {
    return this.data
  }

  async json () {
    return JSON.parse(this.data)
  }
}

export default function obtainFetchImplementation (mode, options) {
  if (mode === 'direct') {
    return new BrowserFetchConnection(options)
  } else if (mode === 'capacitor') {
    return new CapacitorFetchConnection(options)
  } else {
    throw new Error(`Unknown fetch implementation: ${mode}`)
  }
}
