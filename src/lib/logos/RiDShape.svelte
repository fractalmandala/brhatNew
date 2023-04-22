<script lang="ts">
let rotation = 0
let x = 1
let z = -1

function moveX(){
	x = (x*rotation)
}

function moveY(){
	z = (z*rotation)
}

</script>

<svelte:window bind:scrollY={rotation}/>
<div class="logo-svg-box c-c-c-c" id="rid-shape">
	<svg id="stickyshape" width="100%" height="100%" viewBox="0 0 349 372" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate({rotation*2}deg)">
		<g id="rid symbol" clip-path="url(#clip0_2219_100)">
		<g id="group8">
			<path id="path16" d="M246.159 286.55C262.473 287.231 280.181 284.336 297.778 277.268C299.002 258.114 296.293 240.059 290.608 224.5C282.714 249.329 266.889 271.308 246.159 286.55Z" fill="#272727" class="draggable moveable svg-elem-1"></path>
			<path id="path18" d="M297.778 277.268C315.374 270.233 332.851 258.976 348.438 243.55C344.762 221.778 337.123 202.217 326.979 186.144C327.104 218.405 316.68 251.163 297.778 277.268" fill="#272727" class="draggable svg-elem-2"></path>
			<path id="path20" d="M221.416 333.548C239.808 338.31 260.489 339.556 281.936 336.421C291.469 316.677 296.578 296.423 297.778 277.268C279.027 303.504 252.022 323.526 221.416 333.548" fill="#272727" class="draggable svg-elem-3"></path>
			<path id="path22" d="M296.578 186.144C296.585 199.075 294.58 212.112 290.608 224.5C304.22 215.309 316.855 202.259 326.979 186.144H296.578Z" fill="#272727" class="draggable svg-elem-4"></path>
			<path id="path24" d="M221.416 333.548C233.572 318.743 241.787 302.507 246.159 286.55C235.813 294.203 224.246 300.2 212.029 304.214L221.416 333.548Z" fill="#272727" class="draggable svg-elem-5"></path>
			<path id="path26" d="M174.602 186.809C180.652 195.067 189.33 201.335 199.456 204.681C193.21 195.929 184.598 189.565 174.949 186.404C174.991 186.361 174.821 186.674 174.602 186.809" fill="#272727" class="draggable svg-elem-6"></path>
			<path id="path28" d="M199.456 204.681C209.583 208.047 221.156 208.484 232.779 205.451C225.125 196.061 215.506 189.572 205.376 186.144C205.355 192.98 203.343 199.242 199.456 204.681Z" fill="#272727" class="draggable svg-elem-7"></path>
			<path id="path30" d="M183.864 216.218C190.036 225 199.19 232.238 210.382 236.68C209.652 224.512 205.727 213.421 199.456 204.681C195.597 210.104 189.95 214.246 183.864 216.218Z" fill="#272727" class="draggable svg-elem-8"></path>
			<path id="path32" d="M210.382 236.68C221.563 241.149 234.755 242.835 248.614 240.974C246.106 227.021 240.447 214.811 232.779 205.451C228.854 217.845 220.856 228.991 210.382 236.68Z" fill="#272727" class="draggable svg-elem-9"></path>
			<path id="path36" d="M202.642 274.883C214.924 281.657 229.84 285.897 246.159 286.55C250.559 270.594 251.155 254.922 248.614 240.974C237.314 256.803 220.987 268.883 202.642 274.883" fill="#272727" class="draggable svg-elem-10"></path>
			<path id="path38" d="M174.975 186.144C174.969 186.428 174.946 186.397 174.949 186.404C184.583 189.593 195.241 189.61 205.376 186.144H174.975Z" fill="#272727" class="draggable svg-elem-11"></path>
			<path id="path40" d="M235.778 186.144C235.778 192.751 234.762 199.257 232.779 205.451C244.401 202.452 256.049 195.935 266.178 186.144H235.778Z" fill="#272727" class="draggable svg-elem-12"></path>
			<path id="path42" d="M202.642 274.883C208.684 262.087 211.136 248.848 210.382 236.68C205.163 240.544 199.362 243.544 193.251 245.549L202.642 274.883Z" fill="#272727" class="draggable svg-elem-13"></path>
			<path id="path44" d="M183.864 216.218C183.8 205.431 180.486 195.188 174.602 186.81C174.513 186.884 174.475 186.889 174.478 186.886L183.864 216.218Z" fill="#272727" class="draggable svg-elem-14"></path>
			<path id="path46" d="M102.279 286.55C106.651 302.507 114.866 318.743 127.021 333.548C145.43 328.808 161.492 320.559 174.219 310.271C148.681 310.358 122.921 301.92 102.279 286.55" fill="#272727" class="draggable svg-elem-15"></path>
			<path id="path50" d="M50.6597 277.268C51.8589 296.423 56.9683 316.677 66.5014 336.421C87.9481 339.556 108.629 338.31 127.021 333.548C96.4149 323.526 69.4108 303.504 50.6597 277.268Z" fill="#272727" class="draggable svg-elem-16"></path>
			<path id="path52" d="M212.029 304.214C199.818 308.244 186.967 310.277 174.219 310.271C186.946 320.559 203.008 328.808 221.416 333.548L212.029 304.214" fill="#272727" class="draggable svg-elem-17"></path>
			<path id="path54" d="M50.6597 277.268C68.2557 284.336 85.9647 287.231 102.278 286.55C91.9201 278.912 82.7704 269.631 75.2413 259.123L50.6597 277.268Z" fill="#272727" class="draggable svg-elem-18"></path>
			<path id="path56" d="M173.836 186.81C167.952 195.188 164.638 205.431 164.573 216.218C170.78 207.446 173.958 197.184 174.219 186.912C173.747 186.853 174.103 186.946 173.836 186.81Z" fill="#272727" class="draggable svg-elem-19"></path>
			<path id="path58" d="M164.573 216.218C164.481 227.001 167.685 238.312 174.219 248.591C180.753 238.312 183.957 227.001 183.864 216.218C177.886 218.254 170.553 218.254 164.573 216.218Z" fill="#272727" class="draggable svg-elem-20"></path>
			<path id="path60" d="M148.981 204.681C142.711 213.421 138.785 224.512 138.056 236.68C149.248 232.238 158.4 225 164.573 216.218C158.487 214.246 152.841 210.104 148.981 204.681Z" fill="#272727" class="draggable svg-elem-21"></path>
			<path id="path62" d="M138.056 236.68C137.301 248.848 139.753 262.087 145.795 274.883C158.107 268.125 167.726 258.87 174.219 248.591C161.213 248.607 148.512 244.432 138.056 236.68" fill="#272727" class="draggable svg-elem-22"></path>
			<path id="path64" d="M145.795 274.883C151.807 287.68 161.45 299.998 174.219 310.271C186.988 299.998 196.631 287.68 202.642 274.883C184.322 280.946 164.116 280.946 145.795 274.883Z" fill="#272727" class="draggable svg-elem-23"></path>
			<path id="path66" d="M99.8228 240.974C97.2821 254.922 97.8783 270.594 102.278 286.55C118.598 285.897 133.513 281.657 145.795 274.883C127.451 268.883 111.123 256.803 99.8228 240.974" fill="#272727" class="draggable svg-elem-24"></path>
			<path id="path68" d="M174.477 186.886C174.469 186.881 174.501 186.903 174.219 186.912C174.48 197.184 177.657 207.446 183.864 216.218L174.477 186.886Z" fill="#272727" class="draggable svg-elem-25"></path>
			<path id="path70" d="M193.251 245.549C187.145 247.564 180.732 248.591 174.219 248.591C180.712 258.87 190.33 268.125 202.642 274.883L193.251 245.549Z" fill="#272727" class="draggable svg-elem-26"></path>
			<path id="path72" d="M99.8229 240.974C113.682 242.835 126.875 241.149 138.056 236.68C132.831 232.831 128.196 228.129 124.402 222.828L99.8229 240.974" fill="#272727" class="draggable svg-elem-27"></path>
			<path id="path74" d="M148.981 204.681C159.107 201.335 167.785 195.067 173.836 186.809C173.741 186.748 173.622 186.628 173.562 186.533L148.981 204.681" fill="#272727" class="draggable svg-elem-28"></path>
			<path id="path76" d="M57.8297 147.787C44.2174 156.978 31.5819 170.029 21.4585 186.144C31.5819 202.259 44.2174 215.309 57.8297 224.5C49.8696 199.657 49.8696 172.628 57.8297 147.787Z" fill="#272727" class="draggable svg-elem-29"></path>
			<path id="path78" d="M21.4585 186.144C11.3138 202.217 3.6753 221.778 0 243.55C15.5861 258.976 33.063 270.233 50.6597 277.268C31.7574 251.163 21.3336 218.405 21.4585 186.144" fill="#272727" class="draggable svg-elem-30"></path>
			<path id="path80" d="M50.6597 95.0185C33.063 102.054 15.5861 113.31 0 128.739C3.6753 150.509 11.3138 170.07 21.4585 186.144C21.3336 153.88 31.7574 121.124 50.6597 95.0185Z" fill="#272727" class="draggable svg-elem-31"></path>
			<path id="path82" d="M75.2413 259.123C67.6976 248.627 61.787 236.894 57.8297 224.5C52.1446 240.059 49.4364 258.114 50.6598 277.268L75.2413 259.123Z" fill="#272727" class="draggable svg-elem-32"></path>
			<path id="path84" d="M50.6598 95.0187C49.4364 114.173 52.1446 132.228 57.8297 147.787C61.787 135.393 67.6976 123.659 75.2413 113.166L50.6598 95.0187Z" fill="#272727" class="draggable svg-elem-33"></path>
			<path id="path86" d="M173.488 185.883C163.855 182.694 153.197 182.677 143.061 186.144C153.197 189.61 163.855 189.593 173.488 186.404C173.462 186.598 173.462 185.689 173.488 185.883Z" fill="#272727" class="draggable svg-elem-34"></path>
			<path id="path88" d="M143.061 186.144C132.931 189.572 123.313 196.061 115.659 205.451C127.282 208.484 138.855 208.047 148.981 204.681C145.095 199.242 143.082 192.98 143.061 186.144Z" fill="#272727" class="draggable svg-elem-35"></path>
			<path id="path90" d="M148.981 167.606C138.855 164.238 127.282 163.803 115.659 166.833C123.313 176.226 132.931 182.717 143.061 186.144C143.082 179.306 145.095 173.045 148.981 167.606Z" fill="#272727" class="draggable svg-elem-36"></path>
			<path id="path92" d="M115.659 166.833C104.036 169.837 92.3892 176.352 82.2599 186.144C92.3892 195.935 104.036 202.452 115.659 205.451C111.665 193.128 111.665 179.159 115.659 166.833" fill="#272727" class="draggable svg-elem-37"></path>
			<path id="path94" d="M82.26 186.144C72.1248 195.892 63.4943 208.917 57.8297 224.5C71.4323 233.731 85.9588 239.141 99.8229 240.974C88.4261 225.203 82.2093 205.693 82.26 186.144Z" fill="#272727" class="draggable svg-elem-38"></path>
			<path id="path96" d="M99.8229 131.312C85.9588 133.145 71.4323 138.557 57.8297 147.787C63.4943 163.368 72.1248 176.393 82.26 186.144C82.2093 166.594 88.4261 147.083 99.8229 131.312" fill="#272727" class="draggable svg-elem-39"></path>
			<path id="path98" d="M173.562 186.533C173.488 186.441 173.485 186.403 173.488 186.404C163.839 189.565 155.227 195.929 148.981 204.681L173.562 186.533" fill="#272727" class="draggable svg-elem-40"></path>
			<path id="path100" d="M124.402 222.828C120.593 217.534 117.636 211.649 115.659 205.451C107.991 214.811 102.331 227.021 99.8229 240.974L124.402 222.828" fill="#272727" class="draggable svg-elem-41"></path>
			<path id="path102" d="M99.8229 131.313C102.331 145.266 107.991 157.475 115.659 166.833C117.636 160.639 120.593 154.753 124.402 149.459L99.8229 131.313" fill="#272727" class="draggable svg-elem-42"></path>
			<path id="path104" d="M148.981 167.607C155.227 176.358 163.839 182.721 173.488 185.883C173.485 185.884 173.488 185.846 173.562 185.754L148.981 167.607" fill="#272727" class="draggable svg-elem-43"></path>
			<path id="path106" d="M174.219 62.0166C161.492 51.7284 145.43 43.479 127.021 38.7404C114.866 53.546 106.651 69.7788 102.279 85.7368C122.921 70.3681 148.681 61.9272 174.219 62.0166Z" fill="#272727" class="draggable svg-elem-44"></path>
			<path id="path108" d="M127.021 38.7403C108.629 33.9772 87.9481 32.7287 66.5014 35.8656C56.9683 55.6093 51.8589 75.8641 50.6597 95.0186C69.4108 68.7827 96.4149 48.7634 127.021 38.7403Z" fill="#272727" class="draggable svg-elem-45"></path>
			<path id="path110" d="M221.416 38.7405C209.307 23.9245 193.222 10.6021 174.219 0.336184C155.215 10.6021 139.131 23.9245 127.021 38.7405C157.68 28.6526 190.758 28.6526 221.416 38.7405" fill="#272727" class="draggable svg-elem-46"></path>
			<path id="path112" d="M75.2413 113.166C82.7704 102.658 91.9201 93.3746 102.278 85.7368C85.9647 85.0559 68.2557 87.9508 50.6597 95.0187L75.2413 113.166Z" fill="#272727" class="draggable svg-elem-47"></path>
			<path id="path114" d="M221.416 38.7405C203.008 43.479 186.946 51.7284 174.219 62.0167C186.967 62.0085 199.818 64.0422 212.029 68.073L221.416 38.7405Z" fill="#272727" class="draggable svg-elem-48"></path>
			<path id="path116" d="M174.219 185.376C173.958 175.103 170.78 164.843 164.573 156.069C164.638 166.855 167.952 177.097 173.836 185.478C174.103 185.34 173.747 185.434 174.219 185.376Z" fill="#272727" class="draggable svg-elem-49"></path>
			<path id="path118" d="M164.573 156.069C158.4 147.286 149.248 140.048 138.056 135.607C138.785 147.773 142.711 158.865 148.981 167.606C152.841 162.182 158.487 158.039 164.573 156.069Z" fill="#272727" class="draggable svg-elem-50"></path>
			<path id="path120" d="M183.864 156.069C183.957 145.287 180.753 133.977 174.219 123.696C167.685 133.977 164.481 145.287 164.573 156.069C170.553 154.032 177.886 154.032 183.864 156.069Z" fill="#272727" class="draggable svg-elem-51"></path>
			<path id="path122" d="M174.219 123.696C167.726 113.415 158.107 104.16 145.795 97.4047C139.753 110.2 137.301 123.439 138.056 135.607C148.512 127.854 161.213 123.681 174.219 123.696" fill="#272727" class="draggable svg-elem-52"></path>
			<path id="path124" d="M145.795 97.4048C133.513 90.6319 118.598 86.3887 102.278 85.7369C97.8783 101.691 97.2821 117.365 99.8228 131.313C111.123 115.483 127.451 103.402 145.795 97.4048" fill="#272727" class="draggable svg-elem-53"></path>
			<path id="path126" d="M202.642 97.4048C196.631 84.6053 186.988 72.2894 174.219 62.0167C161.45 72.2894 151.807 84.6053 145.795 97.4048C164.116 91.341 184.322 91.341 202.642 97.4048Z" fill="#272727" class="draggable svg-elem-54"></path>
			<path id="path128" d="M173.562 185.754C173.622 185.659 173.741 185.538 173.836 185.478C167.785 177.219 159.107 170.951 148.981 167.607L173.562 185.754" fill="#272727" class="draggable svg-elem-55"></path>
			<path id="path130" d="M124.402 149.459C128.196 144.158 132.831 139.456 138.056 135.607C126.875 131.138 113.682 129.45 99.8229 131.313L124.402 149.459" fill="#272727" class="draggable svg-elem-56"></path>
			<path id="path132" d="M202.642 97.4048C190.33 104.16 180.712 113.415 174.219 123.696C180.732 123.696 187.145 124.725 193.251 126.737L202.642 97.4048Z" fill="#272727" class="draggable svg-elem-57"></path>
			<path id="path134" d="M183.864 156.069C177.657 164.843 174.48 175.103 174.219 185.375C174.501 185.383 174.469 185.405 174.477 185.401L183.864 156.069Z" fill="#272727" class="draggable svg-elem-58"></path>
			<path id="path136" d="M290.608 147.787C296.293 132.228 299.002 114.173 297.778 95.0187C280.181 87.9508 262.473 85.056 246.159 85.7369C266.889 100.979 282.714 122.96 290.608 147.787" fill="#272727" class="draggable svg-elem-59"></path>
			<path id="path138" d="M297.778 95.0186C296.578 75.8641 291.469 55.6093 281.936 35.8656C260.489 32.7287 239.808 33.9772 221.416 38.7403C252.022 48.7634 279.027 68.7827 297.778 95.0186" fill="#272727" class="draggable svg-elem-60"></path>
			<path id="path140" d="M326.979 186.144C337.123 170.07 344.762 150.509 348.438 128.739C332.851 113.31 315.374 102.054 297.778 95.0185C316.68 121.124 327.104 153.88 326.979 186.144" fill="#272727" class="draggable svg-elem-61"></path>
			<path id="path142" d="M212.029 68.0729C224.246 72.0896 235.813 78.0841 246.159 85.7368C241.787 69.7788 233.572 53.546 221.416 38.7404L212.029 68.0729Z" fill="#272727" class="draggable svg-elem-62"></path>
			<path id="path144" d="M326.979 186.144C316.855 170.029 304.22 156.978 290.608 147.787C294.58 160.172 296.585 173.211 296.578 186.144H326.979Z" fill="#272727" class="draggable svg-elem-63"></path>
			<path id="path146" d="M174.949 185.883C184.598 182.72 193.21 176.358 199.456 167.606C189.33 170.95 180.652 177.219 174.602 185.477C174.821 185.614 174.991 185.927 174.949 185.883" fill="#272727" class="draggable svg-elem-64"></path>
			<path id="path148" d="M199.456 167.606C205.727 158.865 209.652 147.773 210.382 135.607C199.19 140.048 190.036 147.286 183.864 156.069C189.95 158.039 195.597 162.182 199.456 167.606Z" fill="#272727" class="draggable svg-elem-65"></path>
			<path id="path150" d="M205.376 186.144C215.506 182.717 225.125 176.226 232.779 166.833C221.156 163.803 209.583 164.238 199.456 167.606C203.343 173.045 205.355 179.306 205.376 186.144" fill="#272727" class="draggable svg-elem-66"></path>
			<path id="path152" d="M232.779 166.833C240.447 157.475 246.106 145.266 248.614 131.313C234.755 129.45 221.563 131.137 210.382 135.607C220.856 143.296 228.854 154.444 232.779 166.833Z" fill="#272727" class="draggable svg-elem-67"></path>
			<path id="path154" d="M248.614 131.313C251.155 117.365 250.559 101.691 246.159 85.7369C229.84 86.3887 214.924 90.6319 202.642 97.4048C220.987 103.402 237.314 115.483 248.614 131.313Z" fill="#272727" class="draggable svg-elem-68"></path>
			<path id="path156" d="M266.178 186.144C276.313 176.393 284.944 163.368 290.608 147.787C277.005 138.557 262.478 133.145 248.614 131.312C260.011 147.083 266.229 166.594 266.178 186.144Z" fill="#272727" class="draggable svg-elem-69"></path>
			<path id="path158" d="M174.478 185.402C174.475 185.398 174.513 185.403 174.602 185.478C180.486 177.097 183.8 166.855 183.864 156.069L174.478 185.402" fill="#272727" class="draggable svg-elem-70"></path>
			<path id="path160" d="M193.251 126.737C199.362 128.743 205.163 131.743 210.382 135.607C211.136 123.439 208.684 110.2 202.642 97.4047L193.251 126.737Z" fill="#272727" class="draggable svg-elem-71"></path>
			<path id="path162" d="M266.178 186.144C256.049 176.352 244.401 169.837 232.779 166.833C234.762 173.031 235.778 179.536 235.778 186.144H266.178Z" fill="#272727" class="draggable svg-elem-72"></path>
			<path id="path164" d="M205.376 186.144C195.241 182.677 184.583 182.694 174.949 185.883C174.946 185.891 174.969 185.859 174.975 186.144H205.376Z" fill="#272727" class="draggable svg-elem-73"></path>
			<path id="path34" d="M248.614 240.974C262.478 239.141 277.005 233.731 290.608 224.5C284.944 208.917 276.313 195.892 266.178 186.144C266.229 205.693 260.011 225.203 248.614 240.974Z" fill="#272727" class="draggable svg-elem-74"></path>
			<path id="path48" d="M127.021 333.548C139.131 348.363 155.215 361.684 174.219 371.95C193.222 361.684 209.307 348.363 221.416 333.548C190.758 343.635 157.68 343.635 127.021 333.548" fill="#272727" class="draggable svg-elem-75"></path>
		</g>
			<path id="path48_2" d="M127.021 38.4329C139.131 23.6184 155.215 10.2974 174.219 0.0307617C193.222 10.2974 209.307 23.6184 221.416 38.4329C190.758 28.3457 157.68 28.3457 127.021 38.4329" fill="#10C56D" class="draggable svg-elem-76"></path>
		</g>
			<defs>
			<clipPath id="clip0_2219_100">
			<rect width="349" height="372" fill="white" class="draggable svg-elem-77"></rect>
			</clipPath>
			</defs>
	</svg>
</div>

<style>

#stickyshape {
	position: fixed;
	top: 0;
	right: 0;
	left: 64vw;
	height: 100vh;
}

.logo-svg-box {
	height: 400px;
	width: 400px;
	overflow: visible;
	align-items: center;
	justify-content: center;
	transform-origin: center center;
	position: relative;
}

.logo-svg-box svg {
	height: 400px;
	width: 400px;
	transform-origin: center center;
	transition: all 4s var(--cube3);
	overflow: visible;
	position: absolute;
	top: 0;
	left: 0;
}

.logo-svg-box svg, .logo-svg-box svg path {
	transition: all 1s var(--cube2);
 	transform-origin: center center;
}

.logo-svg-box svg:hover {
	transform: scale(1.2);
}
#group8 path {
	transition: fill 1s var(--cube5);
}



/***************************************************
 * Generated by SVG Artista on 2/14/2023, 1:02:32 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

@-webkit-keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
          animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
}

@-webkit-keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-2 {
  -webkit-animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
          animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
}

@-webkit-keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-3 {
  -webkit-animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
          animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
}

@-webkit-keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-4 {
  -webkit-animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
          animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
}

@-webkit-keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-5 {
  -webkit-animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
          animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
}

@-webkit-keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-6 {
  -webkit-animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
          animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
}

@-webkit-keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-7 {
  -webkit-animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
          animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
}

@-webkit-keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-8 {
  -webkit-animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
          animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
}

@-webkit-keyframes animate-svg-fill-9 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-9 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-9 {
  -webkit-animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
          animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
}

@-webkit-keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-10 {
  -webkit-animation: animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
          animation: animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
}

@-webkit-keyframes animate-svg-fill-11 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-11 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-11 {
  -webkit-animation: animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
          animation: animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
}

@-webkit-keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-12 {
  -webkit-animation: animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
          animation: animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
}

@-webkit-keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-13 {
  -webkit-animation: animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
          animation: animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
}

@-webkit-keyframes animate-svg-fill-14 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-14 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-14 {
  -webkit-animation: animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
          animation: animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
}

@-webkit-keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-15 {
  -webkit-animation: animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
          animation: animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
}

@-webkit-keyframes animate-svg-fill-16 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-16 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-16 {
  -webkit-animation: animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
          animation: animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
}

@-webkit-keyframes animate-svg-fill-17 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-17 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-17 {
  -webkit-animation: animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
          animation: animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
}

@-webkit-keyframes animate-svg-fill-18 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-18 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-18 {
  -webkit-animation: animate-svg-fill-18 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s both;
          animation: animate-svg-fill-18 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s both;
}

@-webkit-keyframes animate-svg-fill-19 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-19 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-19 {
  -webkit-animation: animate-svg-fill-19 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s both;
          animation: animate-svg-fill-19 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s both;
}

@-webkit-keyframes animate-svg-fill-20 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-20 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-20 {
  -webkit-animation: animate-svg-fill-20 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s both;
          animation: animate-svg-fill-20 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s both;
}

@-webkit-keyframes animate-svg-fill-21 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-21 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-21 {
  -webkit-animation: animate-svg-fill-21 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s both;
          animation: animate-svg-fill-21 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s both;
}

@-webkit-keyframes animate-svg-fill-22 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-22 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-22 {
  -webkit-animation: animate-svg-fill-22 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s both;
          animation: animate-svg-fill-22 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s both;
}

@-webkit-keyframes animate-svg-fill-23 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-23 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-23 {
  -webkit-animation: animate-svg-fill-23 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both;
          animation: animate-svg-fill-23 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both;
}

@-webkit-keyframes animate-svg-fill-24 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-24 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-24 {
  -webkit-animation: animate-svg-fill-24 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s both;
          animation: animate-svg-fill-24 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-25 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-25 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-25 {
  -webkit-animation: animate-svg-fill-25 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s both;
          animation: animate-svg-fill-25 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s both;
}

@-webkit-keyframes animate-svg-fill-26 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-26 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-26 {
  -webkit-animation: animate-svg-fill-26 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s both;
          animation: animate-svg-fill-26 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s both;
}

@-webkit-keyframes animate-svg-fill-27 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-27 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-27 {
  -webkit-animation: animate-svg-fill-27 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s both;
          animation: animate-svg-fill-27 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s both;
}

@-webkit-keyframes animate-svg-fill-28 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-28 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-28 {
  -webkit-animation: animate-svg-fill-28 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s both;
          animation: animate-svg-fill-28 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s both;
}

@-webkit-keyframes animate-svg-fill-29 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-29 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-29 {
  -webkit-animation: animate-svg-fill-29 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s both;
          animation: animate-svg-fill-29 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-30 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-30 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-30 {
  -webkit-animation: animate-svg-fill-30 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s both;
          animation: animate-svg-fill-30 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s both;
}

@-webkit-keyframes animate-svg-fill-31 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-31 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-31 {
  -webkit-animation: animate-svg-fill-31 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s both;
          animation: animate-svg-fill-31 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s both;
}

@-webkit-keyframes animate-svg-fill-32 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-32 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-32 {
  -webkit-animation: animate-svg-fill-32 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s both;
          animation: animate-svg-fill-32 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s both;
}

@-webkit-keyframes animate-svg-fill-33 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-33 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-33 {
  -webkit-animation: animate-svg-fill-33 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s both;
          animation: animate-svg-fill-33 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s both;
}

@-webkit-keyframes animate-svg-fill-34 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-34 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-34 {
  -webkit-animation: animate-svg-fill-34 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s both;
          animation: animate-svg-fill-34 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-35 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-35 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-35 {
  -webkit-animation: animate-svg-fill-35 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both;
          animation: animate-svg-fill-35 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both;
}

@-webkit-keyframes animate-svg-fill-36 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-36 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-36 {
  -webkit-animation: animate-svg-fill-36 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s both;
          animation: animate-svg-fill-36 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s both;
}

@-webkit-keyframes animate-svg-fill-37 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-37 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-37 {
  -webkit-animation: animate-svg-fill-37 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
          animation: animate-svg-fill-37 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
}

@-webkit-keyframes animate-svg-fill-38 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-38 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-38 {
  -webkit-animation: animate-svg-fill-38 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s both;
          animation: animate-svg-fill-38 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s both;
}

@-webkit-keyframes animate-svg-fill-39 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-39 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-39 {
  -webkit-animation: animate-svg-fill-39 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s both;
          animation: animate-svg-fill-39 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-40 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-40 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-40 {
  -webkit-animation: animate-svg-fill-40 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s both;
          animation: animate-svg-fill-40 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s both;
}

@-webkit-keyframes animate-svg-fill-41 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-41 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-41 {
  -webkit-animation: animate-svg-fill-41 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both;
          animation: animate-svg-fill-41 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both;
}

@-webkit-keyframes animate-svg-fill-42 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-42 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-42 {
  -webkit-animation: animate-svg-fill-42 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.9s both;
          animation: animate-svg-fill-42 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.9s both;
}

@-webkit-keyframes animate-svg-fill-43 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-43 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-43 {
  -webkit-animation: animate-svg-fill-43 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5s both;
          animation: animate-svg-fill-43 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5s both;
}

@-webkit-keyframes animate-svg-fill-44 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-44 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-44 {
  -webkit-animation: animate-svg-fill-44 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.1s both;
          animation: animate-svg-fill-44 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.1s both;
}

@-webkit-keyframes animate-svg-fill-45 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-45 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-45 {
  -webkit-animation: animate-svg-fill-45 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.2s both;
          animation: animate-svg-fill-45 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.2s both;
}

@-webkit-keyframes animate-svg-fill-46 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-46 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-46 {
  -webkit-animation: animate-svg-fill-46 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.3s both;
          animation: animate-svg-fill-46 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.3s both;
}

@-webkit-keyframes animate-svg-fill-47 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-47 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-47 {
  -webkit-animation: animate-svg-fill-47 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.4s both;
          animation: animate-svg-fill-47 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.4s both;
}

@-webkit-keyframes animate-svg-fill-48 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-48 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-48 {
  -webkit-animation: animate-svg-fill-48 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.5s both;
          animation: animate-svg-fill-48 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.5s both;
}

@-webkit-keyframes animate-svg-fill-49 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-49 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-49 {
  -webkit-animation: animate-svg-fill-49 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.6000000000000005s both;
          animation: animate-svg-fill-49 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.6000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-50 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-50 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-50 {
  -webkit-animation: animate-svg-fill-50 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.7s both;
          animation: animate-svg-fill-50 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.7s both;
}

@-webkit-keyframes animate-svg-fill-51 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-51 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-51 {
  -webkit-animation: animate-svg-fill-51 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.8s both;
          animation: animate-svg-fill-51 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.8s both;
}

@-webkit-keyframes animate-svg-fill-52 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-52 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-52 {
  -webkit-animation: animate-svg-fill-52 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.9s both;
          animation: animate-svg-fill-52 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.9s both;
}

@-webkit-keyframes animate-svg-fill-53 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-53 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-53 {
  -webkit-animation: animate-svg-fill-53 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6s both;
          animation: animate-svg-fill-53 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6s both;
}

@-webkit-keyframes animate-svg-fill-54 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-54 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-54 {
  -webkit-animation: animate-svg-fill-54 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.1000000000000005s both;
          animation: animate-svg-fill-54 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.1000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-55 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-55 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-55 {
  -webkit-animation: animate-svg-fill-55 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.2s both;
          animation: animate-svg-fill-55 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.2s both;
}

@-webkit-keyframes animate-svg-fill-56 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-56 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-56 {
  -webkit-animation: animate-svg-fill-56 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.3s both;
          animation: animate-svg-fill-56 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.3s both;
}

@-webkit-keyframes animate-svg-fill-57 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-57 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-57 {
  -webkit-animation: animate-svg-fill-57 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.4s both;
          animation: animate-svg-fill-57 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.4s both;
}

@-webkit-keyframes animate-svg-fill-58 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-58 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-58 {
  -webkit-animation: animate-svg-fill-58 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.5s both;
          animation: animate-svg-fill-58 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.5s both;
}

@-webkit-keyframes animate-svg-fill-59 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-59 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-59 {
  -webkit-animation: animate-svg-fill-59 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.6000000000000005s both;
          animation: animate-svg-fill-59 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.6000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-60 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-60 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-60 {
  -webkit-animation: animate-svg-fill-60 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.7s both;
          animation: animate-svg-fill-60 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.7s both;
}

@-webkit-keyframes animate-svg-fill-61 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-61 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-61 {
  -webkit-animation: animate-svg-fill-61 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.8s both;
          animation: animate-svg-fill-61 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.8s both;
}

@-webkit-keyframes animate-svg-fill-62 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-62 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-62 {
  -webkit-animation: animate-svg-fill-62 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.9s both;
          animation: animate-svg-fill-62 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.9s both;
}

@-webkit-keyframes animate-svg-fill-63 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-63 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-63 {
  -webkit-animation: animate-svg-fill-63 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7s both;
          animation: animate-svg-fill-63 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7s both;
}

@-webkit-keyframes animate-svg-fill-64 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-64 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-64 {
  -webkit-animation: animate-svg-fill-64 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.1000000000000005s both;
          animation: animate-svg-fill-64 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.1000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-65 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-65 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-65 {
  -webkit-animation: animate-svg-fill-65 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.2s both;
          animation: animate-svg-fill-65 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.2s both;
}

@-webkit-keyframes animate-svg-fill-66 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-66 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-66 {
  -webkit-animation: animate-svg-fill-66 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.3s both;
          animation: animate-svg-fill-66 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.3s both;
}

@-webkit-keyframes animate-svg-fill-67 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-67 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-67 {
  -webkit-animation: animate-svg-fill-67 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.4s both;
          animation: animate-svg-fill-67 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.4s both;
}

@-webkit-keyframes animate-svg-fill-68 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-68 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-68 {
  -webkit-animation: animate-svg-fill-68 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.5s both;
          animation: animate-svg-fill-68 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.5s both;
}

@-webkit-keyframes animate-svg-fill-69 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-69 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-69 {
  -webkit-animation: animate-svg-fill-69 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.6000000000000005s both;
          animation: animate-svg-fill-69 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.6000000000000005s both;
}

@-webkit-keyframes animate-svg-fill-70 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-70 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-70 {
  -webkit-animation: animate-svg-fill-70 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.7s both;
          animation: animate-svg-fill-70 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.7s both;
}

@-webkit-keyframes animate-svg-fill-71 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-71 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-71 {
  -webkit-animation: animate-svg-fill-71 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.8s both;
          animation: animate-svg-fill-71 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.8s both;
}

@-webkit-keyframes animate-svg-fill-72 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-72 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-72 {
  -webkit-animation: animate-svg-fill-72 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.9s both;
          animation: animate-svg-fill-72 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 7.9s both;
}

@-webkit-keyframes animate-svg-fill-73 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-73 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-73 {
  -webkit-animation: animate-svg-fill-73 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8s both;
          animation: animate-svg-fill-73 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8s both;
}

@-webkit-keyframes animate-svg-fill-74 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-74 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-74 {
  -webkit-animation: animate-svg-fill-74 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.100000000000001s both;
          animation: animate-svg-fill-74 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.100000000000001s both;
}

@-webkit-keyframes animate-svg-fill-75 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

@keyframes animate-svg-fill-75 {
  0% {
    fill: transparent;
  }

  100% {
    fill: linear-gradient(104.11deg, #676767 -1.47%, #272727 89.26%);
  }
}

.svg-elem-75 {
  -webkit-animation: animate-svg-fill-75 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.200000000000001s both;
          animation: animate-svg-fill-75 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.200000000000001s both;
}

@-webkit-keyframes animate-svg-fill-76 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(16, 197, 109);
  }
}

@keyframes animate-svg-fill-76 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(16, 197, 109);
  }
}

.svg-elem-76 {
  -webkit-animation: animate-svg-fill-76 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.3s both;
          animation: animate-svg-fill-76 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.3s both;
}

@-webkit-keyframes animate-svg-fill-77 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-77 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-elem-77 {
  -webkit-animation: animate-svg-fill-77 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.4s both;
          animation: animate-svg-fill-77 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 8.4s both;
}

</style>