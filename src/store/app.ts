// 应用配置相关
interface State {
  theme: string;
}

const app = {
  state: {
    // 主题
    theme: 'blue',
    // 设备类型
    device: ''
  },
  mutations: {
    SetTheme: (state: State, theme: string) => (state.theme = theme)
  },
  actions: {}
};

export default app;
