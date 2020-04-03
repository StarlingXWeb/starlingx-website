import React from 'react'
import PropTypes from 'prop-types'
import { SupportersPageTemplate } from '../../templates/supporters-page'

const SupportersPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  const entryButtons = entry.getIn(['data', 'buttons'])
  const buttons = entryButtons ? entryButtons.toJS() : []

  const entrySupporting = entry.getIn(['data', 'supporting', 'list'])
  const supportingList = entrySupporting ? entrySupporting.toJS() : []

  const entryContributors = entry.getIn(['data', 'contributors', 'list'])
  const contributorsList = entryContributors ? entryContributors.toJS() : []

  const entryDonors = entry.getIn(['data', 'donors', 'list'])
  const donorsList = entryDonors ? entryDonors.toJS() : []

  if (data) {    
    return(
      <SupportersPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        buttons={buttons}
        supporting={{
          title: entry.getIn(['data', 'supporting', 'title']),
          list: supportingList
        }}
        contributors={{
          title: entry.getIn(['data', 'contributors', 'title']),
          list: contributorsList
        }}
        donors={{
          title: entry.getIn(['data', 'donors', 'title']),
          list: donorsList
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }  
}

SupportersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default SupportersPagePreview
