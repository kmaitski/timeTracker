class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      startTime: 0,
      isRunning: false,
      currentCategory: ''
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  toggleTimer() {
    const state = this.state;
    this.setState({ isRunning: !state.isRunning });
    if (state.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.setState({startTime: new Date()});
  }

  stopTimer() {
    const timeWorked = new Date() - this.state.startTime;
    const time = {
      timeWorked: timeWorked,
      category: this.state.currentCategory
    };
    $.post('/time', time);
  }

  changeCategory(category) {
    this.setState({ currentCategory: category });
  }

  render() {
    return (
      <div>
        {this.state.isRunning ?
          <RunningTimer toggleTimer={this.toggleTimer} /> :
          <StoppedTimer toggleTimer={this.toggleTimer} />
        }
        <CategorySelector changeCategory={this.changeCategory} />
      </div>
    );
  }
}