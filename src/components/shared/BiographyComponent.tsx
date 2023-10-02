import React from 'react'
import { FlexColumn } from '../../styled/Flex';
import "../shared/biography.css";

export const BiographyComponent = () => {
  return (
    <> 
    <FlexColumn  width="100%" height="100vh" justifyContent='center' alignItems='center'>
      <div className='main-wrap'>
        <p className='p-biography'>Born May 01, 1982</p>
        <p className='p-biography'>Live and work in Kyiv, Ukraine</p>
        <p className='p-biography'>Last place of work - National Police of Ukraine, Department of Information and Analytical Support</p>
        <p className='p-biography'>Complete higher education, graduated from Dnipropetrovsk State University of Internal Affairs in 2010, majoring in law enforcement</p>
        <p className='p-biography'>From February 2020 to September 2023, he studied at the Step Computer Academy</p>
    </div>
    </FlexColumn>
    </>
  )
}
