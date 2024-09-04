// import { useEffect, useState } from "react";
// import "./partners.css";
// import Loader from "./../../ui/Loader";
// import Title from "./../../ui/Title";
// import Partner from "../../service/partner";
// import kabah from "../../icons/kabah_outline.png";
// import useFetch from "../../hooks/useFetch";
// import {v4 as uuidv4} from 'uuid'

// function Partners() {
//   const { data } = useFetch(Partner.getPartner);
//   return (
//     <div className="partners">
//       {data.count === 0 ? (
//         ""
//       ) : (
//         <div className="container">
//           <Title
//             img={kabah}
//             title="Bizning aloqalarimiz"
//             description="Bizning ko'rsatmalarimiz din ishlari bo'yicha ko'rsatmalarga muvofiq ishlab chiqilgan"
//           />
//           <div className="partners">
// 					{data.results?.length > 0 &&
//             data.results?.map((partner) => {
//               return (
//                 <div className="partner-contents">
//                   <div key={uuidv4()} className="partner-content">
//                     <img src={partner.company_logo} alt="" />
//                   </div>
//                 </div>
//               );
//             })}
// 					</div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Partners;


import { useEffect, useState } from "react";
import "./partners.css";
import Loader from "./../../ui/Loader";
import Title from "./../../ui/Title";
import Partner from "../../service/partner";
import kabah from "../../icons/kabah_outline.png";
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
          {/* <Title
            img={kabah}
            title="Bizning aloqalarimiz"
            description="Bizning ko'rsatmalarimiz din ishlari bo'yicha ko'rsatmalarga muvofiq ishlab chiqilgan"
          /> */}
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
