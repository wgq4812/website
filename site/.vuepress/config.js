module.exports = {
  title: 'Mattrax',
  description: 'Open Source MDM (Mobile Device Management) Server.',
  themeConfig: {
    navbar: false,
  },
  plugins: [
    [
      "vuepress-plugin-simple-analytics",
      {
        customDomain: "esa.otbeaumont.me",
        skipDnt: true
      }
    ]
  ]
};
