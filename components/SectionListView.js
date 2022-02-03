import {SectionList, Text} from 'react-native'

import PropTypes from 'prop-types'
import React from 'react'
import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const SectionListView = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    data: contactsByLetter[letter],
    title: letter,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}

SectionListView.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListView
