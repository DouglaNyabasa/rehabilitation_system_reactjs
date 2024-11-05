import React from 'react'
import Faq from './Faq';
import {faqs} from '../../assets/data/faqs';

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
      {faqs.map((item,index)=> <Faq item={item} key={index}/>)}
    </ul>
  )
}

export default FaqList
