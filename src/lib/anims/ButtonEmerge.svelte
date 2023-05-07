<button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text"><slot></slot></span>
</button>

<style>

button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
}

button.learn-more {
 width: 12rem;
 height: auto;
}

button.learn-more .circle {
 transition: all 0.25s cubic-bezier(0.995, 0.015, 0.000, 1.650);
 position: relative;
 display: block;
 margin: 0;
 width: 32px;
 height: 32px;
 background: linear-gradient(96.89deg, #FF7272 6.93%, #FE4A40 58.12%, #DF2015 92.63%);
 border-radius: 1.625rem;
}

button.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.880, -0.600, 0.355, 1.650);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

button.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.880, -0.600, 0.355, 1.650);
 left: 2px;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

button.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.29rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}

button.learn-more .button-text {
 transition: all 0.45s cubic-bezier(0.880, -0.600, 0.355, 1.650);
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 color: #FFFFFF;
 font-weight: 700;
 line-height: 2.25;
 text-align: center;
 text-transform: uppercase;
 opacity: 0
}

button:hover .circle {
 width: 100%;
}

button:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #fff;
 opacity: 1
}

</style>