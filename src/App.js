import React from 'react';
import MyList from './MyList';
import './App.css';

function App() {
  return (
     <div>
       <Avatar />
       <section class="card2">
          <MyList />
        </section>
     </div>
  );
}

const Avatar = () => {
  return (
    <section class="card">
    <figure class="panel meta">
      <picture>
        <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67516/Screen_Shot_2015-11-18_at_11.47.23_AM.png" width="128" height="128" alt="avatar"/>
        <img class="company-logo" src="https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/d2f8c508-13c6-11ea-8595-3cfdfe02ab60?response-content-disposition=inline%3B%20filename%3D%22https---i.ibb.co-1MwV073-logo.png%22%3B%20filename%2A%3DUTF-8%27%27https---i.ibb.co-1MwV073-logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20191130%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20191130T231231Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d81b690a8c8ca417c3a903ffb07da4259a567cc7d854e037f8b2b142c49af232" alt="eduzz" width="40" height="40"/>
      </picture>
      <figcaption>
        <h1 class="name">Jezão</h1>
        <h3 class="title">Nível Avançado</h3>
      </figcaption>
    </figure>
    
    <div class="panel info">
      <dl class="skillz">
        <dt>Órbita</dt>
        <dd>98</dd>
        <dt>Nutror</dt>
        <dd>23</dd>
        <dt>Jobzz</dt>
        <dd>0</dd>
        <dt>Checkout</dt>
        <dd>32</dd>
      </dl>   
    </div>
    
  </section>
  );
}

export default App;
