import React from "react";
import confezz1 from '../../static/confezz1.png'
import './HomePageContent.css'
import SampleConfezz from './SampleConfezz.js';

const HomePageContent = (props) => {

  return (
    <div>
      <div class="px-4 py-2">
        <div clasd="pb-2">
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-1">
            <h1>Nice To meet ya!!</h1>
            <p class="sidetextcontent">Disclaimer : We are not resposible for any kind of lose, harassment, vulgar messages you recieve while using confessout use this app at your own risk and responsibility</p>
            <p>
              Send Anonymous 🕵️ messages to anyone. We won't disclose the identity of the senders.
            </p>
            <p>
              Receive message from anyone but with a twist 😋, you can't know who is the sender
            </p>
            <p>
              One More thing you can reply to confess also with comment! 😛
            </p>
          </div>
          <div class="col-md-3 offset-md-1">
            <img alt="img" height="300px" src={confezz1}></img>
          </div>
        </div>
      </div>

      <SampleConfezz></SampleConfezz>
    </div>
  );
}

export default HomePageContent;