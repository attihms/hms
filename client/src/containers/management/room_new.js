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
    this.renderField = this.renderField.bind(this);
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
          this.handleClose();
          this.props.newRoomCreated();
          // this.context.router.push('/room_management/settings');
        });
  }

  renderField(fieldConfig, field)  { // val, key
    let fieldElement = '';

    switch (fieldConfig.type) {
      case 'input': 
        //defaultValue={fieldHelper.defaultValue || ''}
        fieldElement = (
          <Field
            name={field}
            component={TextField}
            hintText={fieldConfig.hint || null}
            floatingLabelText={fieldConfig.label}
            fullWidth={true}
          />
        )
        break;
      case 'select': 
        fieldElement = (
          // value={fieldHelper.value}
          <Field
            name={field}
            component={SelectField}
            floatingLabelText={fieldConfig.label}
            fullWidth={true}
          >
            {_.map( fieldConfig.options, (item) => {
              return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            })}
          </Field>
        )
        break;
      case 'textarea': 
        fieldElement = ('<span>Text Area</span>');
        break;
      case 'toogle':
        fieldElement = (
          <Field
            name={field}
            component={Toggle}
            hintText={fieldConfig.hint || null}
            labelPosition="right"
            label={fieldConfig.label}
          />
        )
        break;
      case 'toggle-active':
        // TODO: need to make label dynamic
        fieldElement = (
          <Field
            name={field}
            component={Toggle}
            hintText={fieldConfig.hint || null}
            labelPosition="right"
            label={this.props[field] ? 'Active' : 'Inactive'}
            style={{marginTop: 40, height: 25}}
          />
        )
        break;
      default:
        fieldElement = ('<span>NONE</span>');
        break;
    }

    return (
      <Col xs={12} sm={6} md={3} key={field}>
        { fieldElement }
      </Col>
    );
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
          modal={true}
          open={this.state.open}
          actions={actions}
          onRequestClose={this.handleClose}
        >
          <form className={ styles.markdownBody }>
            <Row>
              {_.map( FIELDS_ROOM, this.renderField )}
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
    if(!values[field] && field !== 'active'){
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
