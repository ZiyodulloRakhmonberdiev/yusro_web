import './Title.css'

function Title({img, title, description, whiteDescription}) {
	return (
		<div className="main-title">
			<div className="header">
				<span></span>
				<img src={img} alt="image" />
				<span></span>
			</div>
			<h1>{title}</h1>
			<p>{description}</p>
			<p className='white'>{whiteDescription}</p>
		</div>
	)
}

export default Title