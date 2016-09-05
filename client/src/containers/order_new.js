import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm, reset, change } from 'redux-form';
import { createOrder, fetchOrder, editOrder, clearOrder } from '../actions';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';

import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import styles from './general.scss';

const FIELDS_USER = {
  title: {
    type: 'select',
    label: 'Title',
    hint: 'hint hint',
    options: [{id: 'Mr', name: 'Mr'}, {id: 'Ms', name: 'Ms'}, {id: 'Mrs', name: 'Mrs'}]
  },
  firstName: {
    type: 'input',
    label: 'First Name',
    hint: 'hint hint'
  },
  lastName: {
    type: 'input',
    label: 'Last Name',
    hint: 'hint hint'
  },
  middleName: {
    type: 'input',
    label: 'Middle Name',
    hint: 'hint hint'
  },
  nationality: {
    type: 'input',
    label: 'Nationality',
    hint: 'hint hint'
  }
};

const FIELDS_ORDER = {
  checkIn: {
    type: 'input',
    label: 'Check In Date',
    hint: 'hint hint'
  },
  checkOut: {
    type: 'input',
    label: 'Check Out Date',
    hint: 'hint hint'
  },
  bookingSource: {
    type: 'input',
    label: 'Booking Source',
    hint: 'hint hint'
  },
  roomType: {
    type: 'input',
    label: 'Room Type',
    hint: 'hint hint'
  },
  numberOfRoom: {
    type: 'input',
    label: 'Number Of Room',
    hint: 'hint hint'
  },
  numberOfPerson: {
    type: 'input',
    label: 'Number Of Person',
    hint: 'hint hint'
  },
  enfant: {
    type: 'input',
    label: 'Enfant',
    hint: 'hint hint'
  }
};

const FIELDS_BILL = {
  price: {
    type: 'input',
    label: 'Final Price',
    hint: 'hint hint'
  },
  paymentMethod: {
    type: 'input',
    label: 'Payment Method',
    hint: 'hint hint'
  }
};

class OrderNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props);

    this.state = { loading: this.props.params.id ? true : false };
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.props.fetchOrder(this.props.params.id)
        .then( () => this.setState({ loading: false }) );
    }
  }

  componentWillUnmount() {
    this.props.clearOrder();
  }

  onSubmit(formProps) {
    if (this.props.params.id) {
      this.props.editOrder(this.props.params.id, formProps)
        .then( () => {
          this.context.router.push('/');
        });
    } else {
      this.props.createOrder(formProps)
        .then( () => {
          this.context.router.push('/');
        });
    }
  }

  renderField(fieldConfig, field)  { // val, key
    const fieldHelper = this.props.fields[field];

    /*<div className={`form-group ${ fieldHelper.touched && fieldHelper.invalid ? 'has-error' : ''}`} key={field} >
      <label>{fieldConfig.label}</label>
      <fieldConfig.type type='text' className='form-control' {...fieldHelper} />
      <div className='help-block'>
        { fieldHelper.touched ? fieldHelper.error : '' }
      </div>
    </div>*/

    let fieldElement = '';

    switch (fieldConfig.type) {
      case 'input': 
        fieldElement = (
          <TextField
            floatingLabelText={fieldConfig.label}
            hintText={fieldConfig.hint}
            fullWidth={true}
            defaultValue={fieldHelper.defaultValue || ''}
          />
        )
        break;
      case 'select': 
        fieldElement = (
          <SelectField 
            floatingLabelText={fieldConfig.label}
            hintText={fieldConfig.hint}
            fullWidth={true}
            value={fieldHelper.value}
            >
            {_.map( fieldConfig.options, (item) => {
              return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            })}
          </SelectField>
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
      <Col xs={12} sm={6} md={3} key={field}>
        { fieldElement }
      </Col>
    );
  }

  renderBarLeftIcon() {
    return (
      <Link to='/'>
        <IconButton iconStyle={{color: '#fff'}}>
          <NavigationBack/>
        </IconButton>
      </Link>
    )
  }

  renderBarRightIcon(editId) {
    return (
      <div style={{marginTop: '5px'}}>
        <FlatButton label="Save" style={{color: '#fff'}}/>
      </div>
    )
  }

	render() {

    if(this.state.loading) {
      return <div>Loading....</div>
    }

    const editMode = this.props.params.id ? true : false;
    
    let { handleSubmit } = this.props;
    const { createOrder } = this.props;

    let orderBarTitle = editMode ? `Reservation #${this.props.params.id}` : `New Reservation`;

		return (
      <div>
        <AppBar 
          title={orderBarTitle} 
          iconElementLeft={this.renderBarLeftIcon()}
          />
        <Grid>
          <form className={ styles.markdownBody } style={{padding: '50px 20px'}}
                onSubmit={ handleSubmit( this.onSubmit.bind(this) ) }>

            <h2>User Information</h2>
            <Row>
              {_.map( FIELDS_USER, this.renderField.bind(this) )}
            </Row>
            <br />

            <h2>Order Information</h2>
            <Row>
              {_.map( FIELDS_ORDER, this.renderField.bind(this) )}
            </Row>
            <br />

            <h2>Payment Bill</h2>
            <Row>
              {_.map( FIELDS_BILL, this.renderField.bind(this) )}
            </Row>

            <br />
            <RaisedButton primary={true}  type='submit' label={ editMode ? 'Save Changes' : 'Create New' }/>
          </form>
        </Grid>
      </div>
		);
	}
}

function validate(values) {
  const errors = {};

  let totalFields = _.concat([], FIELDS_USER, FIELDS_ORDER, FIELDS_BILL);

  _.each(totalFields, (type, field) => {
    if(!values[field]){
      errors[field] = `Enter a ${field}`;
    }
  })

  return errors;
}

function mapStateToProps(state) {
  // return null;
  return { initialValues: state.orders.order }
}

// connect: 1st arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'OrderNewForm',
  fields: _.concat([], _.keys(FIELDS_USER), _.keys(FIELDS_ORDER), _.keys(FIELDS_BILL)),
  validate
}, mapStateToProps, { createOrder, fetchOrder, editOrder, clearOrder })(OrderNew);
