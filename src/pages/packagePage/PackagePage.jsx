import './packagePage.css'
import TourPackages from './../../components/tourPackages/TourPackages';
import ExtraPagesHeader from './../../components/extraPagesHeader/ExtraPagesHeader';
import FaqComponent from '../../components/faq/FaqComponent';

function PackagePage() {
  return (
    <div className='package-page'>
        <ExtraPagesHeader title='Bizning tur paketlarimiz'/>
        <div className="container">
            <TourPackages/>
            <FaqComponent/>
        </div>
    </div>
  )
}

export default PackagePage