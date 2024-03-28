import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const Service = () => {
  return (
    <section>
      <Card className='w-full rounded-2xl pt-0 shadow'>
        <CardHeader className='py-5'>
          <CardTitle className='text-2xl font-semibold py-0'>Services I Offered</CardTitle>
        </CardHeader>
        <CardContent className='overflow-hidden space-y-5'>
          <div className='mt-3 grid grid-cols-3 gap-3 md:grid-cols-3'>
          </div>              
        </CardContent>          
      </Card>
    </section>
  )
}

export default Service