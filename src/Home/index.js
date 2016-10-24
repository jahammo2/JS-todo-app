import LogIn from './LogIn';

class Home {
  constructor() {
    this.tasks = ['foo', 'bar'];
  }

  renderTasks() {
    return this.tasks.map((task) => {
      return `<li>${task}</li>`;
    }).join('');
  }

  render() {
    return `
      <div>${new LogIn().render()}</div>
      <ul>${this.renderTasks()}</ul>
    `;
  }
}

export default Home;
