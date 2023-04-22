<script lang="ts">

	export let isLight
	export let fake

	function toggleMode(){
		isLight = !isLight
	}

	function fauxfake(){
		fake = !fake
	}

</script>

<label for="toggle" on:click={toggleMode} on:keydown={fauxfake}>
  <input class="input" type="checkbox" id="toggle"/>
  <div class="toggle-wrapper"><span class="selector"></span></div>

</label>

<style>


label {
  pointer-events: none;
}
label .input {
  display: none;
}
label .input:checked + .toggle-wrapper {
  box-shadow: 0 8px 14px 0 rgba(18, 51, 215, 0.12);
}
label .input:checked + .toggle-wrapper > .selector {
  left: calc(100% - 32px);
  background-color: #10D56C
}
label .input:checked ~ .notification > .selected:before {
  content: "Yes";
}
label .toggle-wrapper {
  position: relative;
  width: 80px;
  height: 32px;
  background-color: #eaeaea;
  border-radius: 999px;
  margin: auto;
  cursor: pointer;
  pointer-events: all;
  box-shadow: 0 8px 14px 0 rgba(215, 60, 18, 0.12);
}
label .toggle-wrapper .selector {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 2px;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  background-color: #fe4a49;
  -webkit-transition: left 0.25s ease;
  transition: left 0.25s ease;
  border-radius: 50%;
}
label .notification {
  font-size: 20px;
  width: 100%;
}
label .notification .selected:before {
  content: "No";
  font-size: 20px;
  border-bottom: 2px solid;
}


</style>