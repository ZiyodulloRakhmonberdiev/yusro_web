import "./partners.css";
import Partner from "../../service/partner";
import useFetch from "../../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";

function Partners() {
  const { data } = useFetch(Partner.getPartner);

  // Duplicating the list to create a seamless loop
  const partnersList = data.results?.length > 0 ? [...data.results, ...data.results] : [];

  return (
    <div className="partners">
      {data.count === 0 ? (
        ""
      ) : (
        <div className="container">
          <div className="partner-contents">
            {partnersList.map((partner) => (
              <div className="partner-content" key={uuidv4()}>
                <img src={partner.company_logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Partners;
