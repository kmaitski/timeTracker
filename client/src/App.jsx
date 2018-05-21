class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interviewTime: 29.10,
      personalTime: 35.50,
      jobTime: 21.20,
    };
  }

  render() {
    return (
      <div>
        <Totals
          interviewTime={this.state.interviewTime}
          personalTime={this.state.personalTime}
          jobTime={this.state.jobTime}
        />
        <Timer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));