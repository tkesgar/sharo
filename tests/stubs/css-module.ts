export default new Proxy(
  {},
  {
    get(target, key: string): string {
      return key;
    },
  }
);
