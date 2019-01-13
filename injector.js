class Store {
  constructor() {
    this.data = { };
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  set(name, value) {
    this.data[name] = value;
  }

  get(name) {
    return this.data[name];
  }

  getAll() {
    return { ...this.data};
  }

  register() {}
}

const store = new Store();
module.exports = store;