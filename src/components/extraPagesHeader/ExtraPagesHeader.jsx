import './extraPagesHeader.css'
import Breadcrumb from './../../helpers/Breadcrumb';

function ExtraPagesHeader({ title }) {
	return (
		<div className='extra-pages-header'>
			<div className="about">
				<div className="title">{title}</div>
				<div className="bread-crumb">
					<Breadcrumb />
				</div>
			</div>
		</div>
	)
}

export default ExtraPagesHeader