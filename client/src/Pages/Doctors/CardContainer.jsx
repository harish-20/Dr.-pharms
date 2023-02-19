import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'

const CardContainer = (props) => (
  <div className="bg-white px-5 py-4 rounded-lg">
    <div className="flex items-center justify-center capitalize">
      <SubHeading>{props.heading}</SubHeading>
    </div>
    <div className="flex gap-x-6 flex-wrap">{props.children}</div>
  </div>
)

export default CardContainer
