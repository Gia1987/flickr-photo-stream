import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { getPhotosSaga } from '../../actions';

import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const photos = useSelector(({ photosReducer }) => photosReducer?.photos);

  useEffect(() => {
    dispatch(getPhotosSaga());
  }, []);

  return (
    <div style={styles.container}>
      {false
        && (
          <Table
            striped
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Website</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {photos.map(({
                id,
                name,
                email,
                phone,
                username,
                website
              }) => (
                <Table.Row key={id}>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{phone}</Table.Cell>
                  <Table.Cell>{website}</Table.Cell>
                </Table.Row>))}
            </Table.Body>
          </Table>
        )
      }
    </div>
  );
};

export default Home;
