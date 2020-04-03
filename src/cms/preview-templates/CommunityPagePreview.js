import React from 'react'
import PropTypes from 'prop-types'
import { CommunityPageTemplate } from '../../templates/community-page'

const CommunityPagePreview = ({ entry, widgetFor }) => (
  <CommunityPageTemplate
    title={entry.getIn(['data', 'title'])}
    subTitle={entry.getIn(['data', 'subTitle'])}
    content={widgetFor('body')}
  />
)

CommunityPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CommunityPagePreview
