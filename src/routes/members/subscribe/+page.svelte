<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';

	$metaTitle = 'Subscribe to Brhat';
	$metaDescription = 'View our subscription plans and become a paid member.';
	$metaUrl = 'https://www.brhat.in/members/subscribe';
	$metaImage = '/images/cover-brhat.webp';

	let memType = Array(3).fill(false);

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
		<div class="rta-grid grid2 rowgap400 bord-bot p-bot-16 topper">
			<div class="rta-column rowgap200 leftbox">
				<p class="small soft">Select Membership Period:</p>
				<div class="rta-row colgap300 rowgap200">
					<button class="newbutton" on:click={() => toggleMemType(0)} class:selected={memType[0]}
						>Monthly</button
					>
					<button class="newbutton" on:click={() => toggleMemType(1)} class:selected={memType[1]}
						>Bi-annual</button
					>
					<button class="newbutton" on:click={() => toggleMemType(2)} class:selected={memType[2]}
						>Annual</button
					>
				</div>
				{#if memType[0]}
					<h6>Monthly Subscription - ₹500/month</h6>
				{:else if memType[1]}
					<h6>Bi-annual Subscription - ₹2500 every six months (₹417/month)</h6>
				{:else if memType[2]}
					<h6>Annual Subscription - ₹4000 annually (₹334/month)</h6>
				{/if}
				<form class="rta-column rowgap100 colgap200">
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
		<div class="rta-grid grid2 bottom rowgap400">
			<div class="rta-column projects rowgap200">
				<p>Bṛhat Open Library</p>
				<p>Bodha Production</p>
				<p>IKS Content, Research and Training</p>
				<p>Cultural Research</p>
			</div>
		</div>
	</section>
</Shell>

<style lang="sass">

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
	.leftbox
		h6
			border-top: 1px solid var(--contraster2)
			border-bottom: 1px solid var(--contraster2)
			padding-top: 16px
			padding-bottom: 16px
	.topper
		grid-template-columns: 60% 40%
	.leftbox, .rightbox
		padding: 24px
	.bottom
		grid-template-columns: 35% 65%

</style>
