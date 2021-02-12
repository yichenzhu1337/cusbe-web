module.exports = {
  baseUrl: 'http://localhost:',
  port: 5000,
  apiPrefix: 'api',
  apiVersion: 'v1',
  mongoURI: 'mongodb://localhost:27017/trademebooks_dev_db',
  sessionSecret: 'my-secret-session-dev',
  sendGridKey:
    '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',
  twilioKeys: {
    accountSid: 'ACaf602a3c1207efe0343de5c9130a3340',
    authToken: 'b20ac9f89c3a16bc8699274e06ea5c8a'
  },
  contactUsEmail: 'yichenzhu1337@gmail.com',
  GOOGLE: {
    clientID:
      '805560004082-enkfoqlljbedbtkjqaon59arqfmvucqb.apps.googleusercontent.com',
    clientSecret: 'qD0P-rh9DBR1H0w0D3LokQlJ'
  },
  FACEBOOK: {
    clientID: '2713952198666563',
    clientSecret: 'f32993ba016db7a0ec364dcbbbb18553'
  },
  TWITTER: {
    clientID: 'of4xXQEtoF37tgEL2dq8l0dA0',
    clientSecret: 'DekJGN4TnPBGt6sxktX58nG9ZI113UtUPRw2PdTfZ1ZImo72xj'
  },
  GITHUB: {
    clientID: 'clientID',
    clientSecret: 'clientSecret'
  },
  LINKEDIN: {
    clientID: 'clientID',
    clientSecret: 'clientSecret'
  }
}
