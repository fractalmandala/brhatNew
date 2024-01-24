<script lang="ts">

	import { onMount } from 'svelte';
	import Header from '$lib/components/NewHeader.svelte';
  import Head from '$lib/components/HeadComponent.svelte'
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';

	$metaTitle = 'Firekeepers of Civilization';
	$metaDescription = 'A learning program designed to instill deep-rooted connection with the Indic heritage and imbibe participants with the discerning spirit of Dharma Dṛṣṭi.';
	$metaUrl = 'https://www.brhat.in/firekeepers';
	$metaImage = '/images/fkeepertemp.png';

  onMount(() => {
	  $metaTitle = 'Firekeepers of Civilization';
	  $metaDescription = 'A learning program designed to instill deep-rooted connection with the Indic heritage and imbibe participants with the discerning spirit of Dharma Dṛṣṭi.';
	  $metaUrl = 'https://www.brhat.in/firekeepers';
	  $metaImage = '/images/fkeepertemp.png';
  })

</script>

<Header isSwitch={false} />

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
  >
  <section class="grid two left gap3" id="intro">
    <div class="column rightimage">
      <img src="/images/fkeepblan.png" alt="firekeepers"/>
    </div>
    <div class="column rowgap200">
    <p>
      <span class="peach">Firekeepers of Civilization</span> is a learning offering by Amrita Vishwa Vidyapeetham and Bṛhat Educational Trust. The program is designed to instill a deep-rooted connection with the Indic heritage while imbibing students with the discerning spirit of Dharma Dṛṣṭi.
    </p>
    <p>
      It aims to develop in the mind four sets of intelligences: spiritual, cognitive, socio-cultural and political. The learners will traverse through the works of luminaries such as Sitaram Goel, Ram Swarup, Sri Aurobindo, Swami Vivekananda, A.K. Saran, etc. among others. Temple visits help connect with the sacred and spiritual dimensions of the civilization.
    </p>
    <h5 style="font-weight: bold">
      Through reflective and continuous learning, internships and specialized workshops, participants will be able to locate their civilizational heritage within a rapidly evolving world, <span class="peach">thereby becoming torchbearers and effective contributors</span>.
    </h5>
    <div class="row wrap gap1 ptop8">
      <a class="blanker" href="https://drive.google.com/file/d/1M-lsoP4l4GUcrVfNeZVdB_runMxLgMN5/view?usp=sharing" target="_blank" rel="noreferrer">
        <button class="newbutton big">
          Download Program Brochure
        </button>
      </a>
      <a class="blanker" href="https://forms.gle/SeUmpn9kYGztyJYc8" target="_blank" rel="noreferrer">
        <button class="newbutton big red">
          Register for Program
        </button>
      </a>
    </div>
    </div>
  </section>
  <section class="column bordtop ptop32">
    <div class="width70 column gap1 pbot32">
      <h3>About the Programme</h3>
      <p>This program is for undergraduate and postgraduate students enrolled at Amrita University who:</p>
      <p>- have an interest in/ passion for civilization and its various aspects,<br>
        - have burning questions about one’s identity and place in the world, or<br>
        - are looking to study and offer innovative and sustainable solutions for global concerns. 
      </p>
    </div>
    <div class="width70 column gap1 bordtop ptop16 pbot32">
      <h5 style="font-weight: bold">Course Components</h5>
      <div class="column gapmin">
        <p class="peach">Online Courses and Physical Lectures</p>
        <p class="mid greyer">The engagements of 4 hours with 2 sessions per week, will be coherently divided into online and physical lecture components as needed. </p>
      </div>
      <div class="column gapmin">
        <p class="peach">Immersive Field Experiences</p>
        <p class="mid greyer">Sacred tours will be conducted to take the students to the sacred kṣetras of Bhāratavarṣa. At least one such tour will be conducted every year.</p>
      </div>
      <div class="column gapmin">
        <p class="peach">Reading Schedule</p>
        <p class="mid greyer">A list of 108 books will be assigned to the students to read in a curated program with 27 books every year.</p>
      </div>
      <div class="column gapmin">
        <p class="peach">Workshops</p>
        <p class="mid greyer">One 4-day workshop will be held periodically to focus on policy, leadership, design and writing.</p>
      </div>
      <div class="column gapmin">
        <p class="peach">Writing Apprenticeship</p>
        <p class="mid greyer">Students will be taught about writing tools and then will be given real jobs to write and hone their skills. </p>
      </div>
      <div class="column gapmin">
        <h6>In addition - internships, mentor-mentee design and immersive travel experiences. More details on the program, the learning design, our pedagogical approach and overall structure are available in the program brochure.</h6>
      </div>
    </div>
    <a class="blanker" href="https://drive.google.com/file/d/1UOMjBg2xxVRFMkYX1XQUa-njNL3_3_v4/view?usp=sharing" target="_blank" rel="noreferrer">
      <button class="newbutton big">
        Download Program Brochure
      </button>
    </a>
  </section>
</Shell>

<style lang="sass">

.width70
  @media screen and (min-width: 1025px)
    width: 65%

.peach
  color: #FE825F

#intro
  min-height: 100vh
  align-items: start
  align-content: center
  @media screen and (max-width: 1024px)
    padding-top: 128px
    padding-bottom: 64px

.rightimage
  img
    object-fit: cover
    width: 100%
  @media screen and (max-width: 768px)
    img
      width: 50%
      margin: auto

</style>


