import './Title.css'

function Title({img, title, description}) {
	return (
		<div className="main-title">
			<div className="header">
				<span></span>
				<img src={img} alt="" />
				<span></span>
			</div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default Title