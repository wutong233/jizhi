import domtoimage from 'retina-dom-to-image';

function filter(node) {
  return node.id !== 'menu';
}

export const saveBackground = () => {
  const node = document.getElementById('root');
  const githubLink = 'https://github.com/wutong233/jizhi-m/issues';
  domtoimage
    .toPng(node, { filter })
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'jizhi.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      console.error(`截图失败，联系我们: ${githubLink}`, error);
    });
};

/*
    filter out Chinese chars:
    。  \u3002
    ，  \uff0c
    、  \u3001
    ？  \uff1f
    ！  \uff01
*/

/*

export const pureWords = (sentense = '') => {
  const regex = /[\u3002|\uff0c|\u3001|\uff1f|\uff01]/gi;
  return sentense.replace(regex, ' ');
};

*/

export const insertFont = (fontName, value) => {
  console.log('Inserting font', value);
  const style = document.createElement('style');
  style.innerHTML = value + '.verses { font-family:' + fontName + '; }';

  document.head.appendChild(style);
};
