import { url } from "./backend-base-url";

const PROXY_CONFIG = [
  {
    context: [
      '/api/**'
    ],
    target: url,
    secure: false,
    "logLevel": "debug"
  }
]
module.exports = PROXY_CONFIG
