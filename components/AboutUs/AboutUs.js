import React from 'react';
import Image from 'next/image';
import AboutImg from '../../public/images/about-img.jpg';
import classes from '../../styles/AboutUs.module.css';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <section className={`${classes.about_us_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className={`${classes.about_img}`}>
                        <Image src={AboutImg} width={400} height={300} alt='About Img' />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className={`${classes.about_dsc}`}>
                        <h2>Welcome To Job</h2>
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum, justo ut ullamcorper rutrum, ante nisl elementum metus, a interdum lorem libero a justo. Duis accumsan porttitor bibendum. Suspendisse ac tellus condimentum, ornare massa in, consectetur tellus. Aliquam imperdiet elementum imperdiet. Aliquam sagittis augue vitae enim vulputate accumsan. In at justo porta, vehicula elit sed, semper velit. In non finibus lacus, egestas commodo tortor. Etiam purus neque, dapibus non facilisis in, ornare non turpis. Donec tortor libero, fermentum a gravida ut, maximus sed ante. Praesent pellentesque lectus quis lectus posuere, ut mattis sem congue. Donec egestas, ex nec eleifend ultricies, arcu dui varius nibh, nec vulputate magna ipsum in nunc. Etiam volutpat nunc vulputate purus malesuada, in aliquet ex euismod. </p>
                        <Link href='#'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
