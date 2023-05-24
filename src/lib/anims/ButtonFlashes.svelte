<button>
  <span></span>
  <span></span>
  <span></span>
  <span></span><p> <slot></slot></p>
</button>

<style>

button {
 position: relative;
  padding: 2px 8px;
 outline: none;
 border: 1px solid var(--borderline);
 background: #fe4a49;
 overflow: hidden;
 transition: 0.2s;
 border-radius: 4px;
 cursor: pointer;
 font-weight: bold;
}

button p { font-size: 16px; font-family: 'Space Grotesk', sans-serif; color: var(--background)}

button:hover {
 box-shadow: 0 0 10px #fe4a49, 0 0 25px #f98227, 0 0 50px #fb2b2b;
  background: var(--background);
}

button:hover p { color: #fe4a49;}

button span {
 position: absolute;
}

button span:nth-child(1) {
 top: 0;
 left: -100%;
 width: 100%;
 height: 2px;
 background: linear-gradient(90deg, transparent, #ef2c36);
}

button:hover span:nth-child(1) {
 left: 100%;
 transition: 0.17s;
}

button span:nth-child(3) {
 bottom: 0;
 right: -100%;
 width: 100%;
 height: 2px;
 background: linear-gradient(90deg, transparent, #f73920);
}

button:hover span:nth-child(3) {
 right: 100%;
 transition: 0.27s;
}

button span:nth-child(2) {
 top: -100%;
 right: 0;
 width: 2px;
 height: 100%;
 background: linear-gradient(180deg, transparent, #e83131);
}

button:hover span:nth-child(2) {
 top: 100%;
 transition: 0.17s;
}

button span:nth-child(4) {
 bottom: -100%;
 left: 0;
 width: 2px;
 height: 100%;
 background: linear-gradient(360deg, transparent, #fc441f);
}

button:hover span:nth-child(4) {
 bottom: 100%;
 transition: 0.37s;
}

button:active {
 background: #ae00af;
 background: linear-gradient(to top right, #ae00af, #001eff);
 color: #bfbfbf;
 box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
 transition: 0.1s;
}

button:active span:nth-child(1) 
span:nth-child(2) 
span:nth-child(2) 
span:nth-child(2) {
 transition: none;
 transition-delay: none;
}


</style>