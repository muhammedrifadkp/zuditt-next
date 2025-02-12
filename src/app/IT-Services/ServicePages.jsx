

import ServicePage from "./ServicePage";
import ServicePage1 from "./ServicePage1";
import styles from "./ServicePages.module.css";

import '../globals.css'; 


// import ServicePages from "./ServicePages";


function ServicePages() {
//logic goes here
 

  return (
     <>
     <div className={styles.main}>
      <div className={styles.servicePageWrapper}>
        <ServicePage />
      </div>
      <div className={styles.servicePage1Wrapper}>
        <ServicePage1 />
      </div>
    </div>
     </>
     );
}

export default ServicePages;