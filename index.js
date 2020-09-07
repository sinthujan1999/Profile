import React from 'react';
import ReactDOM from 'react-dom';
// import Profileupload from './Piston/UploadPhoto';
// import HorizontalLabelPositionBelowStepper from './Piston/profileuser';

// import {loadStripe} from '@stripe/stripe-js';
// import { Elements} from '@stripe/react-stripe-js';
// import CheckoutForm from './Piston/stripe';
// import Profile from '/home/sinthujan/Desktop/piston_team/src/Piston/Profile.js';
import Profileo from './Profilo';

// const ELEMENTS_OPTIONS = {
//   fonts: [
//     {
//       cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
//     },
//   ],
// };

  

ReactDOM.render(
  <React.StrictMode>
{/* <Profileupload/> */}
{/* <HorizontalLabelPositionBelowStepper/> */}
{/* <div className="AppWrapper">
<Elements options={ELEMENTS_OPTIONS} stripe={loadStripe('pk_test_51HEBecGDUUednvESGXzGZzkC20nJfRlPqe2gsBucEpxKvFsFT3hcOQ6wYJCZIJ2aCtz820NgME5hHRnftfXN594300NxwE1hn2')}>
<CheckoutForm/>
  </Elements>
  </div> */}
 <Profileo/>
  </React.StrictMode>,
  document.getElementById('root')
);









