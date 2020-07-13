import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/App.css'
// import AppBar from '@material-ui/core/AppBar'
import FormFields from './form-fields';
import Header from './header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class App extends React.Component {

  render(){
    return(
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
          <FormFields />
        </Container>
      </React.Fragment>
      //   {/* <AppBar title="Contact Form" /> */}
      //   <Header />
      // </>
    );
  }
}
