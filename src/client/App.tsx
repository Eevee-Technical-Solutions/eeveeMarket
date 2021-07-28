import React, { FC, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './app.scss';
// import Timer from "./containers/Timer";
// import Item from "./containers/Item";
import {Login} from "./containers/Login";
//move main into this

import { makeStyles } from '@material-ui/core';

interface AppProps {
  initialCount?: number;
}

interface AppState {
  counter: number;
}

export const App = () : any => {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route path='/Login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <h1>hello world</h1>
              <a href="/auth/github">login with github</a>
            </Route>
          </Switch>
        </Router>
    </React.Fragment>
  )
}
  


// <div style={{height: '100%' }}>  
//       <timerComponent state={props}></timerComponent> 
//         <div className='parent'>
//           <div className='div1'>
//             <imageBox></imageBox>
//           </div>
//         <div className='div2'>
//           <descriptionBox></descriptionBox>
//         </div>
//         <div className= 'div3'>
//           <currentBid></currentBid>
//         </div> 
//         <div className='div4'>
//                       <bid></bid>
//               </div>
//           </div>
//       </div>
// export class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);

//     this.state = {
//       counter: props.initialCount || 0,
//     };

//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState((prevState) => ({
//       ...prevState,
//       counter: prevState.counter + 1,
//     }));
//   }

//   render() {
//     return (
//       <div className='app'>
//         <h1>My App</h1>
//         <p>{`Initial count: ${this.props.initialCount || 0}`}</p>
//         <button
//           onClick={this.increment}
//         >{`You clicked me ${this.state.counter} times`}</button>
//       </div>
//     );
//   }
// }


// export const App: FC<AppProps> = ({ initialCount }) => {
//   const [counter, setCounter] = useState(initialCount || 0);

//   return (
//     <div className='app'>
//       <h1>My App</h1>
//       <p>{`Initial count: ${initialCount || 0}`}</p>
//       <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
//         {`You clicked me ${counter} times`}
//       </button>
//     </div>
//   );
// };
