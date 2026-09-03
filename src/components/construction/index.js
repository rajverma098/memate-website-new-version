

// import ComingSoon from '../../layout/coming-soon';
// import style from './construction.module.scss';
import './style.css';
import ConstructionHeader from './construction-header';
import ConstructionBussinessManagement from './construction-bussiness-managment';
import ConstructionCrousel from './construction-crousel';
import ConstructionQuesitonAndAns from './construction-question-ans';
import SuccessStories from '../success-stories';
import NewsAndUpdate from '../news-and-updates';

const ConstructionComponent = ({postsLatest}) => {
  return (
    <>
      {/* <ComingSoon /> */}
      <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <ConstructionHeader/>
        <ConstructionBussinessManagement/>
        <ConstructionCrousel/>
        </div>
       
        <div className='singleHeadWrapper'>
          <h4>Run your construction business without the chaos.</h4>
          <p>Let us set it up for you — we’ll even move your old system across.</p>
          {/* <h3>Reach out to us to discover how meMate can streamline operations at your company.</h3> */}
         </div>
        <SuccessStories />
        <NewsAndUpdate postsLatest={postsLatest} />
        {/* <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/> */}
        <div className='industry-page-parent'>
        <ConstructionQuesitonAndAns/>
        
      </div>
    </div>
    </>
  );
};

export default ConstructionComponent;
