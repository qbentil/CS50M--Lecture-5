import * as React from 'react';

import {SectionList, Text} from 'react-native';

import Row from './Row'

const renderItem = (obj) => <Row {...obj.item} />
const renderSectionHeader = obj => <Text>{obj.section.title}</Text>
const SectionListView = (props) => {
  return(
    <SectionList
      renderItem = {renderItem}
      renderSectionHeader = {this.renderSectionHeader}
      sections = {[{
        title: "Contacts",
        data: props.contacts
      }]}
     />
  )
}

export default SectionListView;