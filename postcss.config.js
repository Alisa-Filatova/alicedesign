const autoprefixer = require('autoprefixer');
const flexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
    plugins: [
        // https://github.com/luisrudge/postcss-flexbugs-fixes
        flexbugsFixes,

        // https://github.com/postcss/autoprefixer
        autoprefixer({
            // will add prefixes only for final and IE versions of specification
            flexbox: 'no-2009',
        }),
    ],
};
