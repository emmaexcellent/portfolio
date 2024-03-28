import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { skillList } from '@/constant'

const ExpertArea = () => {
  return (
    <section>
      <Card className='w-full rounded-2xl pt-0 shadow'>
        <CardHeader className='py-5'>
          <CardTitle className='text-2xl font-semibold py-0'>My Expert Area</CardTitle>
        </CardHeader>
        <CardContent className='overflow-hidden space-y-5'>
          <div className='mt-3 grid grid-cols-3 gap-3 md:grid-cols-3'>
            {skillList.map((skill) =>(
              <div key={skill.name} className='flex flex-col place-items-center py-2'>
                <Image src={skill.logo} width={30} height={30} alt='' className='h-10 w-10' />
                <h6 className='text-lg font-semibold'>{skill.name}</h6>
              </div>              
            ))}         
          </div>              
        </CardContent>          
      </Card>
    </section>
  )
}

export default ExpertArea