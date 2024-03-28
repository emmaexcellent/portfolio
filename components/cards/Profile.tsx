'use client'
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useToast } from "@/components/ui/use-toast"
import { Copy, PhoneCall } from 'lucide-react'
import Link from 'next/link'

const Profile = () => {
  const { toast } = useToast()
  const copyEmailToClipboard = () => {
    const email = 'emmaexcellent030@gmail.com'; // Replace with the email you want to copy
    navigator.clipboard.writeText(email)
      .then(() => toast({ description: 'Email copied to clipboard'}))
      .catch(() => toast({ description: 'Failed to copy email to clipboard. Please try again.' }));
  };
  return (
    <section>
      <Card className='w-full rounded-2xl p-6 shadow'>
        <div className=' aspect-[6/4] overflow-hidden rounded-lg bg-muted pt-4 text-center'>
          <Image src='/emmaexcellent0.png' width={500} height={200} alt='Image' className='inline-block h-full w-full scale-110 object-contain object-bottom'/>
        </div>
        <div className='mt-6'>
          <h3 className='text-2xl font-semibold'>Emmanuel Excellent</h3>          
        </div>
        <p className='mt-2'> Experienced and dedicated 
          <span className='font-semibold text-dark'>{' '}Full Stack Developer </span>{`🖥️ `}
          passionate about collaboration, adaptable to emerging technologies, and committed to fostering innovation. Enthusiastic about sharing ideas and contributing to team success. 
        </p>
        <div className='my-3 flex justify-between'>
          <Button className='animate-bounce mt-1'>
            <PhoneCall width={23} className='pr-2'/>
            <span>Book A Call</span>
          </Button>
          <Button variant='outline' className='' onClick={copyEmailToClipboard}>
            <Copy width={23} className='pr-2'/>
            <span>Copy Email</span>
          </Button>
        </div>
        <div className='mt-6 inline-flex gap-3'>
          <Link href='/'>
            <Button variant='outline' className='p-2'>
              <Image src='/social/fb.svg' width={25} height={25} alt='facebook'/>  
            </Button>                   
          </Link>  
          <Link href='/'>
            <Button variant='outline' className='p-2'>
              <Image src='/social/github.svg' width={25} height={25} alt='facebook'/>  
            </Button>                   
          </Link>
          <Link href='/'>
            <Button variant='outline' className='p-2.5'>
              <Image src='/social/linkedin.svg' width={20} height={20} alt='facebook'/>  
            </Button>                   
          </Link>
          <Link href='/'>
            <Button variant='outline' className='p-2'>
              <Image src='/social/youtube.svg' width={25} height={25} alt='facebook'/>  
            </Button>                   
          </Link>                    
        </div>        
      </Card>
    </section>
  )
}

export default Profile