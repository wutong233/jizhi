import React from 'react';
import { Text } from 'evergreen-ui';

const Legal = () => (
  <div style={{ height: 50 }}>
    <Text margin={20} lineHeight="50px" color="muted">
      本扩展使用了
      <a href="https://www.jinrishici.com/" target="_blank" rel="noopener noreferrer">
        今日诗词 API
      </a>
      ，感谢您的支持和喜爱!
    </Text>
    <Text margin={20} lineHeight="50px" color="muted">
      如字体未正常显示,请下载
      <a href="http://font.zeromoe.ml/" target="_blank" rel="noopener noreferrer">
        霞骛文楷
      </a>
      ，或方正细金陵简宋!
    </Text>
  </div>
);
export default Legal;
