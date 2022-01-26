import * as React from 'react';

import Row from './Row'
import { ScrollView } from 'react-native';

const ScrollViewContacts = (props) => {
    return (
        <ScrollView>
        {
          props.contacts.map(contact => {
            return <Row {...contact} />
          })
        }
      </ScrollView>
    )
}

export default ScrollViewContacts;