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
            <p class="sidetextcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et nunc pulvinar blandit. Nullam eget maximus sem. Suspendisse at tellus lacus. Donec ipsum mi, dignissim id ligula vitae, varius luctus nisl. Quisque eu erat ac neque consectetur dictum dignissim a eros. Donec sed sem sit amet felis rutrum placerat. Nullam ac turpis dolor. Ut et mollis nibh. Nunc et nibh rutrum, volutpat ligula id, hendrerit sem. Suspendisse tristique purus mauris, sed placerat lorem sagittis nec. Nulla varius metus a mi vestibulum convallis. Sed neque nulla, aliquam ac tempus et, fermentum ut sem. Phasellus ut arcu facilisis, ultrices metus ac, pellentesque est. Aliquam non purus velit. In hac habitasse platea dictumst. Ut aliquet mi id elit scelerisque bibendum.</p>
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