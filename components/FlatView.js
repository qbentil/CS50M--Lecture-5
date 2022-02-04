import * as React from 'react';

import {FlatList} from 'react-native';
import Row from './Row'

const renderItem = ({item}) => <Row {...item} />
const FlatView = (props) => {
  return(
    <FlatList
      renderItem = {renderItem}
      data = {props.contacts}
     />
  )
}

FlatView.propTypes = {
  contacts: PropTypes.array,
}

export default FlatView;