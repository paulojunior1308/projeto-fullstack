import React, { Component } from "react";
import ErrorImg from './error.jpg'
class ErrorBoundary extends Component
{

  constructor(props)
  {
    super(props)
    this.state = 
    {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo)
  {
    console.log('error', error)
    console.log('errorInfo', errorInfo)
    this.setState({
      hasError: true
    })
  }

  render()
  {
    if(this.state.hasError)
      {
        return <img src={ErrorImg} alt="Error" />;
      }
    return this.props.children
  }
}

export default ErrorBoundary