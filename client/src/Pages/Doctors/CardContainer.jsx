import React from 'react'

import CTA from '../../components/CTA/CTA'
import SubHeading from '../../components/SubHeading/SubHeading'

const CardContainer = (props) => (
  <>
    <div className="flex justify-between items-center">
      <SubHeading>{props.heading}</SubHeading> <CTA>View all</CTA>
    </div>
    <div className="flex gap-x-6 justify-center flex-wrap">
      {props.children}
    </div>
  </>
)

export default CardContainer
