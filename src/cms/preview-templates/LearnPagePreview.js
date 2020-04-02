import React from 'react'
import PropTypes from 'prop-types'
import { LearnPageTemplate } from '../../templates/learn-page'

const LearnPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  const entryUseCases = entry.getIn(['data', 'useCases'])
  const useCasesList = entryUseCases ? entryUseCases.toJS() : []

  if (data) {
    return(
      <LearnPageTemplate        
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        intro={{
          video: entry.getIn(['data', 'intro', 'video'])
        }}
        useCases={useCasesList}
        endText={{
          text: entry.getIn(['data', 'useCases', 'text']),
          link: {
            text: entry.getIn(['data', 'useCases', 'link', 'text']),
            url: entry.getIn(['data', 'useCases', 'link', 'url']),
          }
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }  
}

LearnPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default LearnPagePreview
