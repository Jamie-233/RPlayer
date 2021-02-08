export default (options) => {
  // default options
  const defaultOption = {
    container: document.querySelector('rplayer')[0],
    loop: false,
    volume: 0.8
  };

  // 设置默认值
  for (let defaultKey in defaultOption) {
    if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
      options[defaultKey] = defaultOption[defaultKey];
    }
  }

  return options;
}
