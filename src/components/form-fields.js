import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      message: ''
    }
  }

  //Handle fields change


  render() {
    // const useStyles = makeStyles((theme) => ({
    //   root: {
    //     '& > *': {
    //       margin: theme.spacing(1),
    //       width: '38ch',
    //     },
    //   },
    // }));

    // const classes = useStyles();

    return (
      <form className="form-container" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          variant="outlined"
        />
      </form>
    );

  }

}
