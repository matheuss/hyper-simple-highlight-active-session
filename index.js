module.exports.decorateBrowserOptions = opts => {
  opts.transparent = false;
  return opts;
}

module.exports.decorateConfig = config => {
  config.css += `
    .term_fit:not(.term_term) {
      opacity: 0.6;
    }
    .term_fit.term_active {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
      will-change: opacity;
    }
  `;
  return config;
}
