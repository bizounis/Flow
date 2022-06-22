import React, {useState} from 'react'
import PricingCard from '../PricingCard'


const Pricing = () => {
  const [my, setMy] = useState(
    {myPlan: {
          period: 'Month',
          basicPrice: 1, 
          premPrice: 2,
          }
     });
  return (
    <div className='md:px-8 flex flex-grow flex-col-reverse md:flex-row bg-white md:text-left'>
      <div className='flex flex-col flex-1 justify-center sm:p-20 items-center'>
      <h1 className='text-center mt-8 md:mt-0 mb-4 text-6xl font-bold'>Flexible pricing plans that suit <span className='text-blue'>you</span>.</h1>
      <h3 className='text-center'>Find the right plan for you and enjoy hassle-free experience.</h3>
      <div className='flex justify-center items-center border-2 rounded-full p-2 mt-2 border-opacity-50 space-x-4'>
        <button className='font-medium border-2 rounded-full  border-fade-blue p-4 focus:bg-blue focus:text-white focus:border-2 focus:border-blue'  onClick={() => setMy({...my,  myPlan: {
            period: "Month",
            basicPrice: 1,
            premPrice: 2,
          },
        })}>
          Monthly
        </button>
        <button className='font-medium border-2 rounded-full  border-fade-blue p-4 focus:bg-blue focus:text-white focus:border-2 focus:border-blue'  onClick={() => setMy({...my,  myPlan: {
            period: "Year",
            basicPrice: 10,
            premPrice: 20,
          },
        })}>
          Yearly
        </button>
      </div>  
      <div className='flex-row md:flex w-full justify-center'>
        <PricingCard  planPeriod={my.myPlan.period} basicPlanPrice={my.myPlan.basicPrice} premiumPlanPrice={my.myPlan.premPrice} />
        <PricingCard  planPeriod={my.myPlan.period} basicPlanPrice={my.myPlan.basicPrice} premiumPlanPrice={my.myPlan.premPrice} theme={'solid'} />
      </div>
      </div>
    </div>
  )
}

export default Pricing