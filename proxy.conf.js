const PROXY_CONFIG = [
  {
    target: [
      '/admin/**'
    ],
    target: "localhost:3000",
    secure: false,
    "logLevel": "debug"
  }
]
module.exports = PROXY_CONFIG
