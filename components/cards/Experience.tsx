'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { experienceList }  from '../../constant';

const Experience = () => {
  const [currentY, setCurrentY] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentY(prevY => (prevY + 1) % experienceList.length * 100); // Adjust animation speed and distance
    }, 2000); // Adjust interval for animation speed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [experienceList]);

  return (
    <section>
      <Card className='w-full rounded-2xl pt-0 shadow'>
        <CardHeader className='py-5'>
          <CardTitle className='text-2xl font-semibold py-0'>Work Experience</CardTitle>
        </CardHeader>
        <CardContent className='h-[250px] overflow-hidden space-y-5'>
          {experienceList.map((experience,index) =>(
            <div className='text-sm experience-item' key={index}>
              <p>{experience.date}</p>
              <div className='flex items-center gap-4'>
                <div className='grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-background'>
                  <Image src={experience.logo} width={50} height={100} alt={experience.company} className='h-8 w-8' />
                </div>                
                <div>
                  <h6 className='text-lg font-semibold'>{experience.company}</h6>  
                  <p className='text-sm'>{experience.title}</p>              
                </div>
              </div>            
            </div>
          ))}          
        </CardContent>          
      </Card>
    </section>
  )
}

export default Experience