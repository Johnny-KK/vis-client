// 应用配置相关
interface State {
  theme: string;
}

const app = {
  state: {
    theme: 'blue'
  },
  mutations: {
    SetTheme: (state: State, theme: string) => (state.theme = theme)
  },
  actions: {}
};

export default app;
