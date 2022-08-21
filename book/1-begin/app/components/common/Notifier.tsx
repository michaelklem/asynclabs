import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import Alert from '@material-ui/lab/Alert';
import React from 'react';

export let openSnackbarExternal;

type State = {
  open: boolean;
  message: string;
};

class Notifier extends React.PureComponent<any, State> {
  constructor(props) {
    super(props);
    openSnackbarExternal = this.openSnackbar;

    this.state = {
      open: false,
      message: '',
      severity: "error"
    };
  }

  public render() {
    const message = (
      <span id="snackbar-message-id" dangerouslySetInnerHTML={{ __html: this.state.message }} />
    );

    return (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          message={message}
          autoHideDuration={4000}
          onClose={this.handleSnackbarClose}
          open={this.state.open}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          TransitionComponent={this.slideTransition}

        >
          <Alert severity={this.state.severity}>{message}</Alert>

        </Snackbar>
    );
  }

  public slideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

  public handleSnackbarClose = () => {
    this.setState({
      open: false,
      message: '',
    });
  };

  public openSnackbar = ({ message, severity }) => {
    this.setState({ open: true, message, severity });
  };


}

export default Notifier;