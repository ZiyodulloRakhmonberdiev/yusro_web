import useFetch from '../../hooks/useFetch';
import Info from '../../service/info';
import './answerToQuestions.css'

function AnswerToQuestions() {
	const { data: info } = useFetch(Info.getInfo);
	return (
		<div className="answer-to-questions">
			<div className="title">
				<h1>savollaringiz bormi?</h1>
				<p>Hoziroq biz bilan bog'laning</p>
			</div>
			<a href={info.telephone ? `tel:${info.telephone}` : "tel:+998555002228"} className="phone-number">{info.telephone ? info.telephone : "+998 55 500 22 28"}</a>
		</div>
	)
}

export default AnswerToQuestions