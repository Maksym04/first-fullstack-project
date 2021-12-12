import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createUserAction } from '../../actions';

function UserForm (props) {
  const { createUser } = props;

  const initialUserValues = {
    firstName: '',
    lastName: '',
    email: '',
    passwordHash: '',
  };

  const submitHandler = (values, formikBag) => {
    createUser(values); //вызываем нового юзера
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='firstName' />
            <br />
            <Field name='lastName' />
            <br />
            <Field name='email' />
            <br />
            <Field name='passwordHash' />
            <br />
            <button type='submit'>Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createUser: user => {
    dispatch(createUserAction(user));
  },
});

export default connect(null, mapDispatchToProps)(UserForm);
//первый параметр не нужен, т.к. форма ничего не принимает
