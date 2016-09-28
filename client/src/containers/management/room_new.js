import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createRoom, fetchRoom, editRoom, clearRoom } from '../../actions';

import _ from 'lodash';
import { Row, Col } from 'react-flexbox-grid/lib';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import MenuItem from 'material-ui/MenuItem';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui'

import { FIELDS_ROOM } from './room_fields';

import styles from '../general.scss';

class NewRoomDialog extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props);

    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentWillMount() {
  //   console.log('hello');
  //   const {
  //     token,
  //     fetchRoom
  //   } = this.props;

  //   if (token) {
  //     fetchRoom(1)
  //       .then( (res) => console.dir(res) );
  //   }
  // }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.props.reset();
    this.setState({open: false});
  }

  onSubmit(formProps) {
    this.props.createRoom(formProps)
        .then(() => {
          this.context.router.push('/room_management/settings');
          this.handleClose();
        });
  }

  render() {

    const editMode = false;

    const { handleSubmit, pristine, reset, submitting } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        disabled={submitting}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={ handleSubmit( this.onSubmit ) }
        disabled={pristine || submitting}
        keyboardFocused={true}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create New Room" onTouchTap={this.handleOpen} />
        <Dialog
          title="Room Information"
          modal={false}
          open={this.state.open}
          actions={actions}
          onRequestClose={this.handleClose}
        >
          <form className={ styles.markdownBody }>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <Field name="name" component={TextField} floatingLabelText="Room Name" fullWidth={true}/>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Field name="type" component={SelectField} floatingLabelText="Room Type" fullWidth={true}>
                  {_.map( FIELDS_ROOM.type.options, (val, key) => (
                    <MenuItem value={val.id} primaryText={val.name} key={key}/>
                  ))}
                </Field>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Field name="status" component={SelectField} floatingLabelText="Room Status" fullWidth={true}>
                  {_.map( FIELDS_ROOM.status.options, (val, key) => (
                    <MenuItem value={val.id} primaryText={val.name} key={key}/>
                  ))}
                </Field>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Field name="active" component={Toggle} label="Room Active" labelPosition="right"
                  style={{marginTop: 40, height: 25}}/>
              </Col>
            </Row>
          </form>
        </Dialog>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS_ROOM, (type, field) => {
    if(!values[field]){
      errors[field] = `Please enter a ${field}`;
    }
  })

  return errors;
}

function mapStateToProps(state) {
  return {
    initialValues: state.rooms.room,
    token: state.auth.token
  }
}

NewRoomDialog = reduxForm({
  form: 'RoomNewForm',
  validate
})(NewRoomDialog)

NewRoomDialog = connect(
  mapStateToProps,
  { createRoom, fetchRoom, editRoom, clearRoom }
)(NewRoomDialog)

export default NewRoomDialog
