import React, { Component, PropTypes } from 'react';
import { reduxForm, reset, change } from 'redux-form';
import { createRoom, fetchRoom, editRoom, clearRoom } from '../../actions';

import _ from 'lodash';
import { Row, Col } from 'react-flexbox-grid/lib';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

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

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  onSubmit(formProps) {
    console.dir(formProps);
    this.props.createRoom(formProps)
        .then(() => {
          this.context.router.push('/room_management/settings');
          this.handleClose();
        });
  }

  renderField(fieldConfig, fieldName) {
    console.dir(fieldConfig);
    console.dir(fieldName);

    const fieldHelper = this.props.fields[fieldName];

    const { fields } = this.props;

    let fieldElement = null;

    switch (fieldConfig.type) {
      case 'input': 
        fieldElement = (
          <TextField
            floatingLabelText={fieldConfig.label}
            hintText={fieldConfig.hint}
            fullWidth={true}
            defaultValue={fieldHelper.defaultValue || ''}
            {...fields[fieldName]}
          />
        )
        break;
      case 'select': 
        fieldElement = (
          <SelectField 
            floatingLabelText={fieldConfig.label}
            hintText={fieldConfig.hint}
            fullWidth={true}
            value={fieldHelper.value || fieldConfig.options[0].id}
            {...fields[fieldName]}
            >
            {_.map( fieldConfig.options, (item) => {
              return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            })}
          </SelectField>
        )
        break;
      case 'toggle':
        fieldElement = (
          <Toggle
            label={fieldHelper.value ? 'Active' : 'Inactive'}
            defaultToggled={fieldHelper.value || false}
            labelPosition="right"
            style={{marginTop: 40, height: 25}}
            {...fields[fieldName]}
          />
        )
        break;
      case 'textarea': 
        fieldElement = ('<span>NONE</span>');
        break;
      default:
        fieldElement = ('<span>NONE</span>');
        break;
    }

    return (
      <Col xs={12} sm={6} md={3} key={fieldName}>
        { fieldElement }
      </Col>
    );
  }

  render() {

    const editMode = false;

    const { 
      handleSubmit, createRoom,
      fields: {
        name, type, status, active
      }
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={ handleSubmit( this.onSubmit ) }
        keyboardFocused={true}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create New Room" onTouchTap={this.handleOpen} />
        <Dialog
          title="Room Information"
          actions={actions}
          modal={false}
          open={this.state.open}
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
    if(!values[field]){
      errors[field] = `Enter a ${field}`;
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

export default reduxForm({
  form: 'RoomNewForm',
  fields: _.concat([], _.keys(FIELDS_ROOM)),
  validate
}, mapStateToProps, { createRoom, fetchRoom, editRoom, clearRoom })(NewRoomDialog);