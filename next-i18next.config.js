/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    i18n: {
      defaultLocale: 'pt-BR',
      locales: ['en', 'pt-BR'],
    },
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : '/locales',
}