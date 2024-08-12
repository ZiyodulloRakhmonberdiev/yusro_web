import './category.css';
// api
import ServiceItem from '../../service/serviceItem';
// hooks
import useFetch from '../../hooks/useFetch';
import images from './../../images/index';
import Title from './../../ui/Title';
import Loader from './../../ui/Loader';
import NotAvailable from '../../helpers/NotAvailable';

function Category() {
    const { data, loading, error } = useFetch(ServiceItem.getAgencyServices);


    return (
        <div className='category'>
            <div className="container">
                <Title img={images.kabah} title="Bizning takliflar" description="Biz sizga ishonchli bo'lgan xizmatlarni taklif qilamiz" />
                <div className="cards">
                    {
                        loading ? <Loader /> : error ? <NotAvailable name={error.message}/> : <>
                            {data && data.length > 0 ? data.map((category, index) => {
                                return (
                                    <div key={category.id} className="card">
                                        <div className="header-image">
                                            <img src={category.background_path} alt="" />
                                        </div>
                                        <img src={category.logo_path} alt="" className='header-image-icon' />
                                        <div className="title">{category.name}</div>
                                        <div className="description">
                                            {category.description}
                                        </div>
                                    </div>
                                )
                            }) : <NotAvailable name="Ma'lumot mavjud emas"/>}
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Category;
