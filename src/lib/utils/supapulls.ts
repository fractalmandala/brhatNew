import supabase from '$lib/utils/db'

export async function allAuthors(){
	const { data, error } = await supabase
	.from('brhat-authors')
	.select()
	.order('name')
	if (error) throw new Error(error.message)
	return data
}

export async function specificAuthor(name:string){
	const { data, error } = await supabase
	.from('brhat-authors')
	.select()
	.eq('name',name)
	.single()
	if (error) throw new Error(error.message)
	return data
}

export async function createCurateConsult(){
	const { data, error } = await supabase
	.from('brhat-about')
	.select()
	.eq('type','actions')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function threeConvictions(){
	const { data, error } = await supabase
	.from('brhat-about')
	.select()
	.eq('type','areas')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function brhatActionsSix(){
	const { data, error } = await supabase
	.from('brhat-actions')
	.select()
	.eq('tag', true)
	.order('sequence')
	if (error) throw new Error(error.message)
	return data	
}

export async function BOLEssentials(limit:number){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('id',{ascending: false})
	.limit(limit)
	if (error) throw new Error(error.message)
	return data
}

export async function BOLBodhas(limit:number){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Bodhas')
	.order('id',{ascending: false})
	.limit(limit)
	if (error) throw new Error(error.message)
	return data
}

export async function BOLIKS(limit:number){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','IKS')
	.order('id',{ascending: false})
	.limit(limit)
	if (error) throw new Error(error.message)
	return data
}

export async function BOLROS(limit:number){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Repository of Scripture')
	.order('id',{ascending: false})
	.limit(limit)
	if (error) throw new Error(error.message)
	return data
}

export async function BOLOthers(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.or('Type.eq.History,Type.eq.Sanskrit')
	.order('id',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function BOLLatest(limit: number) {
	const { data, error } = await supabase
		.from('brhat-openlibrary')
		.select()
		.order('id', { ascending: false })
		.limit(limit);
	if (error) throw new Error(error.message);
	return data;
}

export async function BOLSelect(selected:string) {
	const { data, error } = await supabase
		.from('brhat-openlibrary')
		.select()
		.eq('Type',selected)
		.order('id', { ascending: false })
	if (error) throw new Error(error.message);
	return data
}

export async function AryanIssue(){
	const { data, error } = await supabase
	.from('brhat-aryanissue')
	.select()
	.order('id',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function AryanTag(tag: string){
	const { data, error } = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag',tag)
	.order('id',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function AryanTags() {
	const { data } = await supabase
	.rpc('uniquearyantags')
	return data
}

export async function brhatUpdates() {
	const { data, error } = await supabase
	.from('brhat-updates')
	.select()
	.limit(3)
  if (error) throw new Error(error.message)
	return data
}

export async function Shabdavali() {
  const { data, error } = await supabase
  .from('content-shabdavali')
  .select()
  .order('id')
  if (error) throw new Error(error.message)
  return data 
}

export async function latestMrdanga() {
	const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','mrdanga')
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

export async function latestVidsFour() {
	const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}

export async function latestVidsVar(count:number) {
	const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
  .order('id',{ascending: false})
  .limit(count)
  if (error) throw new Error(error.message)
  return data
}

export async function allmrdVids(limiter: number){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.or('type.eq.hindi,type.eq.mrdanga')
	.order('id',{ascending: false})
	.limit(limiter)
  if (error) throw new Error(error.message)
  return data
}

export async function mrdangaVids() {
	const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','mrdanga')
	.lte('id',21)
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

export async function kavitaVids() {
	const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','hindi')
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

export async function iksVids() {
	const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','iks')
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

export async function otherVids() {
	const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','sangam')
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

export async function allChapters() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	.order('sequence', {ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function allDiaryCards() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','diarycard')
	.limit(4)
	if (error) throw new Error(error.message)
	return data
}

export async function allAuths(){
	const { data, error } = await supabase
	.from('brhat-authors')
	.select()
	if (error) throw new Error(error.message)
	return data
}

export async function anveshiTempleArt() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('name','Artwork Inspired by the Hoysala Temples')
	if (error) throw new Error(error.message)
	return data
}

export async function allFaq() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','faq')
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function anveshiGeneral() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','general')
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function anveshiLead() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','lead')
	if (error) throw new Error(error.message)
	return data
}

export async function chapterHighlight(chapter: string){
	const { data, error } = await supabase
  .from('brhat-anveshi')
  .select()
	.eq('chapter',chapter)
	.eq('type','highlight')
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}

export async function chapterFaq(chapter: string){
	const { data, error } = await supabase
  .from('brhat-anveshi')
  .select()
	.eq('chapter',chapter)
	.eq('type','faq')
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}

export async function chapterItinerary(chapter: string){
	const { data, error } = await supabase
  .from('brhat-anveshi')
  .select()
	.eq('chapter',chapter)
	.eq('type','itinerary')
  .order('id')
  if (error) throw new Error(error.message)
  return data
}

export async function chapterTemples(chapter: string){
	const { data, error } = await supabase
  .from('brhat-anveshi')
  .select()
	.eq('chapter',chapter)
	.eq('type','temple')
  .order('id')
  if (error) throw new Error(error.message)
  return data
}

export async function chapterProfiles(chapter: string){
	const { data, error } = await supabase
  .from('brhat-anveshi')
  .select()
	.eq('chapter',chapter)
	.eq('type','profile')
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}

export async function anveshiImages() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','traveldiary')
	if (error) throw new Error(error.message)
	return data
}

export async function anveshiVids(limit:number) {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','anveshi')
  .order('id',{ascending: false})
	.limit(limit)
  if (error) throw new Error(error.message)
  return data
}

export async function allCourses() {
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type','overview')
	.order('sequence',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function fetchDrashtas(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'drashta')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchDarshanas(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'school')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function courseDetails(dynamizer:string){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'course details')
	.eq('dynamizer',dynamizer)
	.order('sequence',{ascending: false})	
	.limit(3)
	if (error) throw new Error(error.message)
	return data
}

export async function courseWhoFor(dynamizer:string){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'course details')
	.eq('dynamizer',dynamizer)
	.order('sequence')	
	.limit(1)
	if (error) throw new Error(error.message)
	return data
}

export async function courseContents(dynamizer:string){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'course content')
	.eq('dynamizer',dynamizer)
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function coursePayment(dynamizer:string){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'payment')
	.eq('dynamizer',dynamizer)
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function courseTakeaways(dynamizer:string){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'takeaway')
	.eq('dynamizer',dynamizer)
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function courseInstructor(dynamizer:string){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'facilitator')
	.eq('dynamizer',dynamizer)
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function brhatAdvisors() {
const { data, error } = await supabase
  .from('brhat-advisory')
  .select()
  .order('id')
  if (error) throw new Error(error.message)
  return data
}

export async function brhatPartners() {
const { data, error } = await supabase
  .from('brhat-about')
  .select()
	.eq('type','partner')
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}

export async function brhatTeam() {
const { data, error } = await supabase
  .from('brhat-team')
  .select()
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}

export async function brhatTeamMember(name:string) {
const { data, error } = await supabase
  .from('brhat-team')
  .select()
	.eq('name',name)
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}

export async function brhatHelper(){
	const { data, error } = await supabase
	.from('brhat-helper')
	.select()
	.order('id')
	if ( error ) throw new Error(error.message)
	return data
}

export async function soaTales(){
	const { data, error } = await supabase
	.from('soaTales')
	.select()
	.order('id')
	.limit(36)
	if (error) throw new Error(error.message)
	return data
}

export async function soaChapter1(){
	const { data, error } = await supabase
	.from('soaChapter1')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function soaChapter2(){
	const { data, error } = await supabase
	.from('soaChapter2')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function brhatActions(link:string){
	const { data, error } = await supabase
	.from('brhat-actions')
	.select()
	.eq('link',link)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function imagesNasadiya() {
	const { data, error } = await supabase
  	.storage
  	.from('midjourneyimages')
  	.list('nasadiya', {
			limit: 1000,
			sortBy: { column: 'created_at', order: 'desc'}
  	})
		if (error) throw new Error(error.message)
		return data
}

export async function imagesPalimpsest(){
	const { data, error } = await supabase
	.from('amrit-galleries')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function imagesPalimpsest2(){
	const { data, error } = await supabase
	.from('amrit-galleries')
	.select()
	.gte('id',15)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function soaChapter4(){
	const { data, error } = await supabase
	.from('soaChapter4')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function DhitiPaginator(link:string){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.eq('link',link)
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function MJGallery() {
	const { data, error } = await supabase
	.from('MidjourneyImages')
	.select()
	.order('id', {ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function MJGallery2() {
	const { data, error } = await supabase
	.from('MidjourneyImages')
	.select()
	.lt('id',120)
	.order('id', {ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function events() {
	const { data, error } = await supabase
	.from('brhat-calendar')
	.select()
	.order('id', {ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function bucket(folder:string){
	const { data, error } = await supabase
	.storage
	.from('brhatwebsite')
	.list(folder, {
  	limit: 100,
  	offset: 0,
  	sortBy: { column: 'name', order: 'asc' },
	})
	if (error) throw new Error(error.message)
	return data
}

export async function getImage(link:string){
	const { data } = await supabase
	.storage
	.from('brhatwebsite')
	.getPublicUrl(link)
	return data
}

export async function getCalendar(){
	const { data, error } = await supabase
	.from('brhat-calendar')
	.select()
	if (error) throw new Error(error.message)
	return data
}

export async function brhatIndex(){
	const { data, error } = await supabase
	.from('brhatindex')
	.select()
	.order('heading')
	if(error) throw new Error(error.message)
	return data
}

export async function allDhatus(limit:number){
	const { data, error } = await supabase
	.from('db-dhatupatha')
	.select()
	.order('id')
	.limit(limit)
	if (error) throw new Error(error.message)
	return data	
}

export async function dhatuForms(id:string){
	const { data, error } = await supabase
	.from('db-dh1')
	.select()
	.eq('ind',id)
	if (error) throw new Error(error.message)
	return data	
}

export async function dhatuStore(id:string){
	const { data, error } = await supabase
	.from('vw-dhatustore2')
	.select()
	.eq('ind',id)
	if (error) throw new Error(error.message)
	return data	
}

export async function allDictionary(){
	const { data, error } = await supabase
	.from('db-dictionary')
	.select()
	.order('id')
	if(error) throw new Error(error.message)
	return data
}

export async function allApte(){
	const { data, error } = await supabase
	.from('db-dictionaryapte')
	.select()
	.order('mainindexhelp')
	if(error) throw new Error(error.message)
	return data
}

export async function newSRG(dynamizer:string){
    const { data, error } = await supabase
    .from('brhat-drashta2')
    .select()
    .eq('type','session schedule')
    .eq('dynamizer', dynamizer)
    .order('sequence')
    if (error) throw new Error(error.message)
    return data
}

export async function juneCalendar(dateToday:Date){
  const { data, error } = await supabase
  .from('brhat-june')
  .select()
  .order('id')
	.gte('data',dateToday)
  if (error) throw new Error(error.message)
  return data
}

export async function getDescription(url:string){
	const { data, error} = await supabase
	.from('bol-descriptions')
	.select()
	.eq('path',url)
  if (error) throw new Error(error.message)
  return data
}

export async function getSvarnanjali(){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('type','svarnanjali')
	.order('id',{ ascending: false})
	.limit(3)
  if (error) throw new Error(error.message)
  return data	
}

export async function newsletterItems(issueno:number){
	const { data, error } = await supabase
	.from('brhat-newsletter')
	.select()
	.eq('type','item')
	.eq('issueno',issueno)
	.eq('live', true)
	.neq('tag', 'video')
	.order('seq')
  if (error) throw new Error(error.message)
  return data	
}

export async function filteredNews(tag:string, issueNo: number){
	const { data, error } = await supabase
	.from('brhat-newsletter')
	.select()
	.eq('tag',tag)
	.eq('issueno', issueNo)
	.eq('live', true)
	.neq('tag', 'video')
	.order('seq')
  if (error) throw new Error(error.message)
  return data	
}

export async function newsletterVideos(issueno:number){
	const { data, error } = await supabase
	.from('brhat-newsletter')
	.select()
	.eq('type','video')
	.eq('issueno',issueno)
	.eq('live', true)
	.order('id')
  if (error) throw new Error(error.message)
  return data	
}

export async function newsletterIssues(){
	const { data, error } = await supabase
	.from('brhat-newsletter')
	.select()
	.eq('type','issue')
	.order('id')
  if (error) throw new Error(error.message)
  return data	
}

export async function latestIssue(){
	const { data, error } = await supabase
	.from('brhat-newsletter')
	.select()
	.eq('type','issue')
	.order('id', {ascending: false})
	.limit(1)
  if (error) throw new Error(error.message)
  return data	
}

export async function testimonialsSvarn(){
	const { data, error } = await supabase
	.from('brhat-testimonials')
	.select()
	.eq('type', 'svarnanjali')
	.order('id')
	if ( error ) throw new Error(error.message)
	return data
}

export async function imageGallery(upperLimit:number){
	const { data, error } = await supabase
	.from('amrit-gallery')
	.select()
	.neq('genre', 'cancel')
	.order('id', {ascending: false})
	.range(0, upperLimit)
	if ( error ) throw new Error(error.message)
	return data
}

export async function svEpisodes(){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('type','svarnanjali')
	.eq('description','ep')
	.order('id', {ascending: false})
	if ( error ) throw new Error(error.message)
	return data
}

export async function listUsers(){

const { data: { users }, error } = await supabase.auth.admin.listUsers()
	if (error ) throw new Error(error.message)
	return users
}

export async function soaJanapadas(){
	const { data, error } = await supabase
	.from('soa-janapadas')
	.select()
	.order('id')
	if ( error ) throw new Error(error.message)
	return data	
}

export async function drashtaTestis(){
	const { data, error } = await supabase
	.from('brhat-testimonials')
	.select()
	.eq('type','drashta')
	.order('id')
	if ( error ) throw new Error(error.message)
	return data	
}

export async function connectauth(author:string){
	const { data, error } = await supabase
	.from('brhat-authors')
	.select()
	.eq('author', author)
	if ( error ) throw new Error(error.message)
	return data		
}

export async function samThemes(){
	const { data, error } = await supabase
	.from('bet-samikshanathemes')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data	
}

export async function samDates(){
	const { data, error } = await supabase
	.from('bet-samikshananew')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data		
}