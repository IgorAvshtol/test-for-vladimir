import React, { Dispatch, SetStateAction } from 'react';

import { useDispatch } from 'react-redux';
import { addUser } from '@redux/actions';

import { Field, Form, Formik } from 'formik';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

type AddUserType = {
  setShowForm: Dispatch<SetStateAction<string>>;
}

const useAddUserStyles = makeStyles(
    (theme: Theme) => createStyles({
      contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: theme.spacing(0.5),
        height: theme.spacing(8),
      },
    }),
);

export const AddUserForm = ({setShowForm}: AddUserType) => {
  const classes = useAddUserStyles();

  const dispatch = useDispatch();

  const addnNewUser = (firstName: string, surName: string, age: number) => {
    dispatch(addUser(firstName, surName, age));
  };

  return <div>
    <Formik
        initialValues={{firstName: '', surName: '', age: 17}}
        validate={values => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          addnNewUser(values.firstName, values.surName, values.age);
          setSubmitting(false);
          setShowForm('');
        }}
    >
      {({isSubmitting}) => (
          <Form className={classes.contentWrapper}>
            <div>
              <b>First name</b>: <Field type="firstName" name="firstName"/>
            </div>
            <div>
              <b>Surname</b>: <Field type="surName" name="surName"/>
            </div>
            <div>
              <b>Age</b>: <Field type="age" name="age"/>
            </div>
            <Button size="small" variant="outlined" type="submit" disabled={isSubmitting}
                    onBlur={() => setShowForm('')}>
              Add
            </Button>
          </Form>
      )}
    </Formik>
  </div>;
};