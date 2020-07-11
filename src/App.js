import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      invoices: []
    }
  }
  render(){

    const isLoading = this.state.isLoading;
    const invoices = this.state.invoices;

    // const body = [
    //   {
    //     "id": "100",
    //     "Vendor": "Handbook",
    //     "Amount": "$18.00",
    //     "Date": "7/12/20"
    //   },
    //   {
    //     "id": "101",
    //     "Vendor": "Handbook",
    //     "Amount": "$18.00",
    //     "Date": "7/12/20"
    //   },
    //   {
    //     "id": "102",
    //     "Vendor": "Handbook",
    //     "Amount": "$18.00",
    //     "Date": "7/12/20"
    //   }
    // ]

    // if(isLoading){
    //   return(<div>Loading...</div>)
    // }
    return (
      <MuiThemeProvider>
      //   <React.Fragment>
          <AppBar className="app-bar" title="Form Page" />
      //   </React.Fragment>
      // </MuiThemeProvider>

    );

  }
}

export default App;
