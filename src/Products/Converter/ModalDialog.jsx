import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogText from '@material-ui/core/DialogContentText';
import { WiredButton } from 'react-wired';

const Title = styled.h2`
  && {
    margin: 0;
    padding: 24px;
    font-weight: normal;
    font-family: 'FallIsComing';
  }
`;
const Text = styled(DialogText)`
  && {
    font-size: 26px;
    font-family: 'FallIsComing';
  }
`;

const ModalDialog = ({ opened, handleClick }) => (
  <Dialog open={opened}>
    <Title>Sorry, bro</Title>
    <DialogContent>
      <Text>You have not enough money</Text>
    </DialogContent>
    <DialogActions>
      <WiredButton onClick={handleClick} text="okay :(" />
    </DialogActions>
  </Dialog>
);

ModalDialog.propTypes = {
  /** true if dialog should be opened */
  opened: PropTypes.bool.isRequired,
  /** handler for button */
  handleClick: PropTypes.func.isRequired
};

export default ModalDialog;
