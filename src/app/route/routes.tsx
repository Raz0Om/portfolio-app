export const routes = {
  main: {
    getName: (): string => "НСИ",
    getPath: () => "/",
    getUrl(): string {
      return this.getPath();
    },
  },
};
