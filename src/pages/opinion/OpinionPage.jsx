import React from 'react'
import Opinion from "../../components/opinion/Opinion"
import "./opinion.css"
import TourPackages from './../../components/tourPackages/TourPackages';

const OpinionPage = () => {
  return (
    <div className="opinion">
      <Opinion />
      <TourPackages />
    </div>
  )
}

export default OpinionPage