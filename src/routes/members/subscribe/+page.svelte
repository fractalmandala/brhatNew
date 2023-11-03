<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { isAuth } from '$lib/utils/globalstores'

	$metaTitle = 'Subscribe to Brhat';
	$metaDescription = 'View our subscription plans and become a paid member.';
	$metaUrl = 'https://www.brhat.in/members/subscribe';
	$metaImage = '/images/cover-brhat.webp';
	export let form: any;
	let memType = Array(3).fill(false);
	let alreadySub = false
	let loading = false;

	function toggleAlready(){
		alreadySub = !alreadySub
	}

	function toggleMemType(index: number) {
		memType[index] = !memType[index];
		for (let i = 0; i < memType.length; i++) {
			if (i !== index && memType[i] === true) {
				memType[i] = false;
			}
		}
	}
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 p-top-128">
		<h3>Subscribe to Bṛhat</h3>
		<p>{$isAuth}</p>
		<div class="rta-column checker xleft rowgap100">
			<p>Already subscribed?</p>
			<button class="newbutton" on:click={toggleAlready}>Click Here</button>
		</div>
		<div class="rta-grid grid2 rowgap400 bord-bot p-bot-16 bord-top p-top-16 topper">
			{#if alreadySub}
			<div class="rta-column rowgap200 leftbox">
				<h5 class="title">Sign In:</h5>
				<form method="post" action="?/login">
					<div class="rta-column xleft rowgap100 null">
						<div class="rta-row ycenter colgap100">
							<input
								id="email"
								name="email"
								value={form?.values?.email ?? ''}
								class="input"
								type="email"
								placeholder="Email"
								required
							/>

							<input
								id="password"
								name="password"
								class="input"
								type="password"
								placeholder="Password"
								required
							/>
						</div>
						<button disabled={loading} class="newbutton">Sign in</button>
					</div>
				</form>
			</div>
			{:else}
			<div class="rta-column rowgap200 leftbox">
				<p class="small soft">Select Membership Period:</p>
				<div class="rta-row colgap300 rowgap200">
					<button class="newbutton this1" on:click={() => toggleMemType(0)} class:selected={memType[0]}
						>Monthly<br>₹651</button
					>
					<button class="newbutton this1" on:click={() => toggleMemType(1)} class:selected={memType[1]}
						>Annual<br>₹6001</button
					>
				</div>
				{#if memType[0]}
					<h6>Monthly Subscription - ₹651/month</h6>
				{:else if memType[1]}
					<h6>Annual Subscription - ₹6001 annually (₹500/month)</h6>
				{/if}
				<form class="rta-column rowgap100 colgap200" method="post" action="?signup">
					<input type="text" placeholder="Full Name" />
					<input type="phone" placeholder="Phone Number" />
					<input type="email" placeholder="Email Address" />
					<div class="rta-row colgap200 rowgap100">
						<input type="password" placeholder="Create Password" />
						<input type="password" placeholder="Confirm Password" />
					</div>
					<button class="newbutton red">Submit</button>
					<p class="small soft">
						On clicking submit you will be led to a payment link. Please complete payment there, and
						you will be redirected back here.
					</p>
					<p class="small soft">
						Please check your email for membership and payment confirmation emails.
					</p>
				</form>
			</div>
			{/if}
			<div class="rta-column rowgap200 rightbox">
				<h6>What You Get:</h6>
				<p class="mid soft">
					Subscription to Bṛhat gives you access to monthly exclusive content containing but not
					limited to:
				</p>
				<p class="mid soft">Bṛhat Adya - our monthly newsletter</p>
				<p class="mid soft">New visual stories at Scrolls of Āryavarta</p>
				<p class="mid soft">All Bṛhat Open Library research tools and datasets</p>
				<p class="mid soft">Featured essays and long reads</p>
			</div>
		</div>
		<h5 class="title">Engage Deeper With Us</h5>
		<p class="mid soft">
			Subscribe to a lifetime access to all exclusive content we generate across various media.
			Lifetime subscriptions help us enhance member content, pilot deep research projects, and
			deliver premium production qualities.
		</p>
		<div class="rta-grid grid2 bottom rowgap400">
			<form class="rta-column secondform rowgap100 leftbox">
				<p class="mid small">Select subcription tier:</p>
				<select>
					<option value="₹10,000">₹10,000</option>
					<option value="₹25,000">₹25,000</option>
					<option value="₹50,000">₹50,000</option>
				</select>
				<input type="text" placeholder="Full Name" />
				<input type="phone" placeholder="Phone Number" />
				<input type="email" placeholder="Email Address" />
				<div class="rta-row colgap200 rowgap100">
					<input type="password" placeholder="Create Password" />
					<input type="password" placeholder="Confirm Password" />
				</div>
				<button class="newbutton red">Submit</button>
				<p class="small soft">
					On clicking submit you will be led to a payment link. Please complete payment there, and
					you will be redirected back here.
				</p>
				<p class="small soft">
					Please check your email for membership and payment confirmation emails.
				</p>
			</form>
			<div class="rta-column projects rowgap200 rightbox">
				<p>Bṛhat Open Library</p>
				<p>Bodha Production</p>
				<p>IKS Content, Research and Training</p>
				<p>Cultural Research</p>
			</div>
		</div>
	</section>
</Shell>

<style lang="sass">

.this1
	height: max-content	

.projects
	p
		background: #fe4a49
		color: white
		padding: 4px 8px

.newbutton.selected
	background: #fe4a49

@media screen and (min-width: 1024px)
	form
		input[type=text], input[type=phone], input[type=email]
			width: 50%
		input
			border: 1px solid var(--contraster2)
			border-radius: 4px
			font-size: 14px
			padding: 4px
	.leftbox
		h6
			border-top: 1px solid var(--contraster2)
			border-bottom: 1px solid var(--contraster2)
			padding-top: 16px
			padding-bottom: 16px
	.rightbox
		border: 1px solid var(--contraster)
	.topper
		grid-template-columns: 60% 40%
	.leftbox, .rightbox
		padding: 24px
	.bottom
		grid-template-columns: 35% 65%

</style>
