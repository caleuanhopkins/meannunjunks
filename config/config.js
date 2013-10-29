
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://localhost/revuz-dev',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'revuz - Development'
    }
  },
  test: {
    db: 'mongodb://localhost/revuz-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'revuz - Test'
    }
  },
  production: {
    db: 'mongodb://localhost/revuz',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'revuz - Production'
    }
  }
}
