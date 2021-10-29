import { h, render, Component } from 'preact';

class MyComponent extends Component {
  shouldComponentUpdate() {
    // do not re-render via diff:
    return false;
  }
  componentDidMount() {
    
  }
  render({id,width,height}) {
    return <>
      <canvas id={id} width={width} height={height}></canvas> 
    </>
  }
}

export default MyComponent;