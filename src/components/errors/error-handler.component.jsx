import { Component } from "react";
//error boundary
class ErrorHandler extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     errorMessage: '',
  //   }
  // }

  state = {
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    };
    //causing rerender
  }

  componentDidCatch(error, errorInfo) {
    //send error to logging seevice
    console.log("error caught on the errorboundary, ", error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <>
          <h2>Boom! Something went wrong.</h2>
          <p>Reason: {this.state.errorMessage}</p>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandler;
