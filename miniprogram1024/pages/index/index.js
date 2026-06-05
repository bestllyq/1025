// 1024 游戏小程序 - 页面逻辑
Page({
  data: {
    // 游戏在线地址（替换为你的实际部署地址）
    gameUrl: 'https://bestllyq.github.io/1025/1024.html'
  },
  onLoad() {
    console.log('1024 游戏加载中...');
  },
  onMessage(e) {
    console.log('收到游戏消息:', e.detail);
  },
  onShareAppMessage() {
    return {
      title: '1024 - 合并方块游戏',
      path: '/pages/index/index'
    };
  }
});
