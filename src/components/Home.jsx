import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
   <>
    <div className='home' id="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
      
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics"/>
      <div>
        <p>
          we are your one and only one solution to the tech problems you face every day. we are leading tech company whose aim to increase the problem solving ability in children.
        </p>
      </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are....?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum minima explicabo quam deserunt, numquam eum! Totam doloribus ratione ipsam error veniam et, nam maxime similique, sed reiciendis beatae fugiat, autem officiis in iure provident delectus laudantium corrupti cumque consequatur illo? Delectus enim iste voluptate, quas maxime iure sunt at rerum assumenda libero. Tempora, possimus a voluptates ut adipisci voluptate cupiditate eius dicta odio. Quisquam atque maiores deleniti sed laboriosam eos nulla dolorem enim architecto veritatis, nobis inventore non id et, quo laborum libero molestiae recusandae voluptatem corporis quae odit! Laudantium, nulla illum. Dignissimos perferendis incidunt.</p>
      </div>
    </div>
    <div className='home4' id="brands">
         <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
             <AiFillGoogleCircle/>
             <p>Google</p>
            </div>

            <div style={{
              animationDelay:"0.5s"
            }}>
             <AiFillAmazonCircle/>
             <p>Amazon</p>
            </div>

            <div style={{
              animationDelay:"0.7s"
            }}>
             <AiFillYoutube/>
             <p>Youtube</p>
            </div>

            <div style={{
              animationDelay:"1s"
            }}>
             <AiFillInstagram/>
             <p>Instagram</p>
            </div>
          </article>
         </div>
    </div>

   
   </>
  )
}

export default Home
