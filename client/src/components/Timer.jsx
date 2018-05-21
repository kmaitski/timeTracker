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
    const endTime = new Date();
    const timeWorked = endTime - this.state.startTime;
    $.post('/time/{this.state.currentCategory}', timeWorked, this.props.getIntialData);
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