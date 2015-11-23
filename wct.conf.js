module.exports = {
//  verbose: true,
  testTimeout: 5 * 60 * 1000,
  plugins: {
    local: {
      browsers: ['chrome', 'firefox']
    },
    sauce: {
      disabled: true,
      browsers: [
        'Linux/chrome',
        'Linux/firefox',
        'OS X 10.10/chrome',
        'OS X 10.10/firefox',
        'OS X 10.10/safari',
        'Windows 7/internet explorer/10.0',
        'Windows 7/internet explorer/11.0',
        'Windows 10/MicrosoftEdge/20.10240',
        'Windows 7/chrome',
        'Windows 10/firefox',

      ]
    }
  },
};
