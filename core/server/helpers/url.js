// # URL helper
// Usage: `{{url}}`, `{{url absolute="true"}}`
//
// Returns the URL for the current object scope i.e. If inside a post scope will return post permalink
// `absolute` flag outputs absolute URL, else URL is relative

var getMetaDataUrl = require('../data/meta/url');

function url(options) {
    var absolute = options && options.hash.absolute,
        section = !!options ? options.hash.section : '';

    return getMetaDataUrl(this, absolute, section);
}

module.exports = url;
