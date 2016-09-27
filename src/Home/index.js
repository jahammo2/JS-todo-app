class Home {
  constructor() {
    this.x = 'deez';
    this.tasks = ['foo', 'bar'];
  }

  renderTasks() {
    return this.tasks.map((task) => {
      return `<li>${task}</li>`;
    }).join('');
  }

  render() {
    return `<ul>${this.renderTasks()}</ul>`;
  }
}

export default Home;
