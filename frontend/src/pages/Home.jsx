import React from 'react'
import './style/Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/products`);
  };

  return (
    <div>
      <article className="article_home">
        <section
          className="section_home"
          onClick={() => handleView()}>
          <h2>Ecommerce</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            laborum delectus quaerat aspernatur? Explicabo odit, magni
            architecto fuga facere quia perferendis qui officia porro esse
            doloremque, tenetur hic excepturi aliquam nihil quis quaerat ipsam
            dolores cupiditate exercitationem beatae eaque labore ratione
            veniam! Eaque quidem dolor, vitae id, beatae doloremque laborum
            repudiandae facilis excepturi amet consequatur dolorem possimus
            aliquid minus delectus. Eos maiores omnis dolore facilis praesentium
            aspernatur inventore! Molestiae commodi mollitia modi quis quia, at
            non iste exercitationem expedita nulla!
          </p>
        </section>
        <section className="section_home">
          <h2>Servicio 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            pariatur hic velit iste, ratione, commodi molestias necessitatibus
            eaque dolores dignissimos animi! Aspernatur nostrum iste quidem
            omnis cum voluptates odio neque beatae sequi qui. Optio nostrum
            obcaecati molestias, delectus provident nisi voluptate sed ipsam
            nemo aspernatur ipsum eum necessitatibus, tempore distinctio enim
            sit ullam incidunt error adipisci vitae quia quasi repellendus.
          </p>
        </section>
        <section className="section_home">
          <h2>Servicio 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            modi quod dolore, sapiente est libero commodi fugit alias provident
            blanditiis voluptatibus. Unde amet commodi officia iste modi
            perferendis reprehenderit, quos hic ratione consequatur? Dolorum
            expedita quisquam impedit nemo rem sapiente ad voluptates aut
            assumenda! Fugit debitis quisquam repudiandae earum voluptatum?
          </p>
        </section>
      </article>
    </div>
  )
}

export default Home