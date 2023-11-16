import React from 'react'
import './Footer.css'
 import Lottie from 'lottie-react'
import arrow from '../../images/arrow.json'
export const Footer = () => {
  return (
    <footer>
    <section className='f-main'>
      <div className="f-main-item">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt delectus culpa architecto iure non voluptatem sapiente earum aperiam repellat fugit!</p>
      </div>
  
      <div className="f-main-item">
          <h2>Affirmations</h2>
          <ul>
            <li><a href="https://www.amazon.in/Most-Powerful-Book-Affirmations-Written/dp/0989240916" target="_blank" rel="noreferrer">The Most Powerful Book of Affirmations Ever Written</a></li>
            <li><a href="https://www.amazon.in/Positive-Affirmations-affirmations-attracting-FeelFabToday-ebook/dp/B00LV3MYHM" target="_blank" rel="noreferrer">Positive Affirmations </a></li>
            <li><a href="https://www.amazon.in/Little-Book-Affirmations-Uplifting-Positivity/dp/1800691777?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S" target="_blank" rel="noreferrer">The Little Book of Affirmations</a></li>
            <li><a href="https://www.amazon.in/Conquer-Day-Affirmations-Josh-Mecouch/dp/0063016494?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3H3WE9M6NY1KV" target="_blank" rel="noreferrer">Conquer the Day</a></li>
          </ul>
        </div>

        <div className="f-main-item">
          <h2>Self Growth Books</h2>
          <ul>
            <li><a href="https://www.madrasshoppe.com/books-combo-atomic-habits-ikigai-think-like-a-monk-psychology-of-money-and-do-epic-9789391165482-15072.html?gclid=Cj0KCQiAjMKqBhCgARIsAPDgWlzMwK2mMrZpT-5_DLt2JXW7zu9geIvVMANgJH7fotha2p68SBbvMGcaAjUcEALw_wcB" target="_blank" rel="noreferrer">Books Combo</a></li>
            <li><a href="https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=bmx_dp_c2o8rk3o_sccl_3_2/262-1662760-4337219?pd_rd_w=0OEt4&content-id=amzn1.sym.f1284c30-13e1-48e0-ab22-1e4bf3ed2db5&pf_rd_p=f1284c30-13e1-48e0-ab22-1e4bf3ed2db5&pf_rd_r=ZCMAZH3KTM60654CQKKJ&pd_rd_wg=zNt9h&pd_rd_r=634e6584-214e-4d26-ba6d-d3f93b910f0c&pd_rd_i=178633089X&psc=1" target="_blank" rel="noreferrer">Ikigai</a></li>
            <li><a href="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834?ref_=Oct_d_otopr_d_1318132031_2&pd_rd_w=6ME7f&content-id=amzn1.sym.cb97c3fe-bb9e-4404-a654-f560f300976b&pf_rd_p=cb97c3fe-bb9e-4404-a654-f560f300976b&pf_rd_r=NYG0P3A7Q71NSWPWTYQG&pd_rd_wg=FkI4c&pd_rd_r=fe8f3b82-2fe1-48b8-84e4-3ba72be2fbc4&pd_rd_i=1847941834" target="_blank" rel="noreferrer">Atomic Habits</a></li>
            <li><a href="https://www.amazon.in/Think-Like-Monk-Jay-Shetty/dp/0008386595/ref=pd_vtp_h_pd_vtp_h_sccl_5/262-1662760-4337219?pd_rd_w=R18Id&content-id=amzn1.sym.6c9a4279-ad42-4fd6-b9a9-3cd14ede34c9&pf_rd_p=6c9a4279-ad42-4fd6-b9a9-3cd14ede34c9&pf_rd_r=1F35NHNMT2E8R44VJ281&pd_rd_wg=KLcGq&pd_rd_r=3386fdd1-ab32-462a-8666-094848ccba7a&pd_rd_i=0008386595&psc=1" target="_blank" rel="noreferrer">Think Like a Monk </a></li>
            <li><a href="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=bmx_dp_c2o8rk3o_sccl_3_4/262-1662760-4337219?pd_rd_w=2sZDW&content-id=amzn1.sym.f1284c30-13e1-48e0-ab22-1e4bf3ed2db5&pf_rd_p=f1284c30-13e1-48e0-ab22-1e4bf3ed2db5&pf_rd_r=M7PS4R06FJ8HA4KSGCR8&pd_rd_wg=MzPzj&pd_rd_r=c0c4ceec-6607-457e-ab21-d30ab8eb63dc&pd_rd_i=1612681131&psc=1" target="_blank" rel="noreferrer">Rich Dad Poor Dad</a></li>
          </ul>
        </div>
    </section>
  
   
  
    <section className='f-legal'>
      <div className="copyright">
        &copy; 2023 Quotivation. All rights reserved.
      </div>
      <div className="roll-up">
    <a href="#">
      <Lottie className="lottie-animation" animationData={arrow} />
    </a>
  </div>
    </section>
  
    <div class="custom-shape-divider-top-1699796100">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

</footer>
  )
}
