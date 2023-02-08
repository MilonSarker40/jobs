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
                        <p>transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted. transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted.</p>
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
