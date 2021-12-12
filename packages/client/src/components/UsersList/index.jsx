import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteUserAction, getUsersAction } from '../../actions';

function UsersList (props) {
  const { users, isFetching, error, getUsers, deleteUser } = props;

  useEffect(() => {
    getUsers();
  }, []); //как только меняется длина users - происходит подгрузка users + если подгрузка из сети, то в зависимостях [users.length]

  const mapUser = ({ id, firstName, lastName, email }) => {
    const deleteHandler = () => {
      deleteUser(id);
    };

    return (
      <li key={id}>
        firstName: {firstName} lastName: {lastName} email: {email}
        <button onClick={deleteHandler}>Delete</button>
      </li>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul>{users.map(mapUser)}</ul>
    </>
  );
}

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersAction()),
  deleteUser: id => dispatch(deleteUserAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
