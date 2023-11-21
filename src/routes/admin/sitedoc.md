---
title: Site Documentation
sections: one
---

### home page
#### layout
##### components
- rid sidebar from '$lib/ridunits/RIDSidebar.svelte'
- chip from '$lib/components/Chip.svelte'
- footer from '$lib/components/Footer.svelte'
##### stores
- breakZero, breakOne, breakTwo, themeMode, innerWidth from '$lib/stores/globalstores'
##### other
- imported styles - types.sass and tokens.sass
##### structure
```bash
themer (id=appbox; type=main)
├ slot 
├ ridsidebar
├ chip
├ footer 
```
##### notes
1. main container, ie, class = themer, is styled to global stores of themeMode, breakZero, breakOne and breakTwo. 
2. this means that anywhere else in the app, responsive styles can be set up under classnames light, dark, levelzero, levelone and leveltwo respectively. (style in global sass file named tokens.sass)

#### page
##### meta info
- $metaTitle = 'Bṛhat'
- $metaDescription = 'the Culture Engine'
- $metaUrl = 'https://www.brhat.in'
- $metaImage = 'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp'
- $metaType = 'webpage'
##### components
- Head from '$lib/components/HeadComponent.svelte'
- Header from '$lib/components/NewHeader.svelte'
- many instances of ButtonEmerge from '$lib/anims/ButtonEmerge.svelte'
- SVCar from '$lib/components/SVCar.svelte'
- HomeAccordion from '$lib/components/HomeAccordion.svelte'
- many instances of CompButton from '$lib/ridunits/CompButton.svelte'
- Youtuber from '$lib/components/Youtuber.svelte'
##### stores
- metaTitle, metaDescription, metaUrl, metaImage, metaType from '$lib/stores/metastores'
- themeMode from '$lib/stores/globalstores'
##### others
- autoAnimate from '@formkit/auto-animate'
- ChevronDown from 'lucide-svelte'
- reveal from 'svelte-reveal';
- styling: '@splidejs/splide/css/core', 'tippy.js/dist/tippy.css' and 'tippy.js/animations/shift-away.css'
##### imported functions
- createCurateConsult, brhatUpdates, latestVidsVar, BOLLatest, allChapters, allCourses from '$lib/utils/supapulls
- latestDhitiSix from '$lib/utils/localpulls'
