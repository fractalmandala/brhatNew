---
title: Dimensions of Pāṇinian Grammar Explored | Part 1 - Optimal Ordering & Meta-Language
author:
  - Rama Seshan Chandra Sekaran 
category: Svayambodha
tags:
  - sanskrit
  - panini
excerpt: This series explores Pāṇinian grammar in the Saṃskṛta language, revealing how Pāṇini employs techniques akin to modern computing to generate words using concise rules, paralleling concepts in formal languages and compiler design.
date: 2024-02-15
image: https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/05dhiti/paniningrammar1.webp
words: "4067"
--- 

This series of articles is dedicated to Pāṇinian grammar of the Saṃskṛta language, as presented in his treatise "Aṣṭādhyāyi". In trying to characterize the grammar of the Sanskrit language spoken in his day, Pāṇini Maharṣi manufactures legitimate and only legitimate words of the Sanskrit language, by designing a set of 4000 rules in a highly compressed language of the "sūtra" that operates on the sounds, verb roots, prefixes and suffixes, to generate all the words of Sanskrit language. 

In this process, Pānini uses techniques from modern computing (especially the theory of formal languages that are used in analysis and compiler design for programming languages) and anticipates them even though it would be 2500 years from his time when the first actual computer would be invented. Techniques like optimal ordering of data, information compression, metalanguage, metarules, use of non-terminal symbols, light before heavy are all used in this masterpiece. 

To study the Aṣṭādhyāyi, it is essential to know the Saṃskṛta language, as that is the language for which the grammar is designed. However in this series, my aim is to introduce how Pānini uses these techniques in his treatise for people who don't have any knowledge of the Saṃskṛta language, or formal language theory in computer science. I also present the rich developments in the philosophy of language that Pānini's work inspired in his successors and compare it with Western philosophies of language like that of Russell, Wittgenstein, de Saussure, etc. 

Language was an important concern in ancient Indian philosophy, especially for the Āstika schools, as they believed that the efficacy of the Vedic rituals directly depended on the sounds of the chanted mantras. They wanted to justify how this efficacy is brought about, and in the process, they had to analyze how the sounds of a language relate to meaning and ultimately reality itself. By the end of this series, you will have a deep appreciation of the importance, depth and scope of Aṣtādhyāyi and the Indian views on language.


#### Introduction: A Fruit Market

Let’s imagine that you are in a fruit market, wanting to buy a bunch of fruits. You see a list of fruits that is available there as follows:


* Mango
* Apple
* Orange
* Pineapple
* Strawberry
* Jackfruit
* Guava
* Pomegranate
* Litchi
* Lemon
* Blueberry

Luckily, let’s say that the fruits that you want to buy are:


* Pineapple
* Strawberry
* Jackfruit
* Guava
* Pomegranate

Now, you see that the fruits that you want are all together in the list - the list is shown here again with the fruits you want in bold.


* Mango
* Apple
* Orange
* **Pineapple**
* **Strawberry**
* **Jackfruit**
* **Guava**
* **Pomegranate**
* Litchi
* Lemon
* Blueberry

One way of saying what you want from the vendor is to name the fruits that you want sequentially. But now you realize that the list is displayed and the vendor can see it clearly. So, instead of saying “I want _**pineapple, strawberry, jackfruit, guava & pomegranate”,**_ you can save some time and her short term memory by saying that “In that list displayed, I want the fruits _<span style="text-decoration:underline;">from</span> **pineapple** <span style="text-decoration:underline;">to</span> **pomegranate**_”. This not only saves little time but the vendor can also get relieved of her short term memory - she can just remember the initial fruit (pineapple) and the final fruit (pomegranate) in the list and she can use the list as reference and pack all the fruits in between. 

“So what?” - you might ask. But imagine instead of some dozen fruits, you are a computer scientist and are dealing with an array (a fancy name for “list” in computer programming) with 10,000 entries. And you want to pick up a hundred of them for doing some operation. And it happens that those hundred elements fall in a nice order and are one by one in the array by luck. Then, as a computer programmer, obviously you would code in such a way that you ask the computer to pick up using the “from _here_ to _here_” style rather than saying all the numbers of all the entries. In this case, this would save immense computing power.

Now, suppose that in the same fruit shop, next time you want the following:

Mango 

Orange 

Guava 

Lemon

These fruits are shown bolded in the entire list below:

* **Mango**
* Apple
* **Orange**
* Pineapple
* Strawberry
* Jackfruit
* **Guava**
* Pomegranate
* Litchi
* **Lemon**
* Blueberry

Note that this time you are not so lucky. You can’t simply say to the vendor that you want fruits from mango to lemon. It will include so many unnecessary fruits that you do not want. The poor vendor has to remember your requirements individually, and pick up and hand it over to you. You can extrapolate this scenario to the computer programming example. 

Now suppose the list of fruits in the shop was reordered as follows:

NEW LIST:

* Apple
* Pineapple
* Strawberry
* Jackfruit
* Pomegranate
* Guava
* Mango
* Orange
* Lemon
* Litchi
* Blueberry

Now let’s consider both of your orders:

Order first time:      Pineapple, Strawberry, Jackfruit, Guava, Pomegranate.

Order second time: Mango, Orange, Guava, Lemon.

Now, with this new list, you can make both the orders in the initial-final way because both of the list of fruits fall sequentially one below the other in the list. Let me bold the fruits in the first order and underline the fruits in the second order in the new list (so the repeated fruit in both orders - guava - will be both bold and underline). It is shown below:

NEW LIST:

* Apple
* **Pineapple**
* **Strawberry**
* **Jackfruit**
* **Pomegranate**
* **<span style="text-decoration:underline;">Guava</span>**
* <span style="text-decoration:underline;">Mango</span>
* <span style="text-decoration:underline;">Orange</span>
* <span style="text-decoration:underline;">Lemon</span>
* Litchi
* Blueberry

Now you can make both orders as follows in this new list:

Previous order - From Pineapple to Guava in the new list.

Present order   - From guava to lemon in the new list.

So, you see how the appropriate ordering of entries in a list matters a lot. If the fruit shop owner is clever, he will perform a statistical analysis and collect the most frequently ordered sets of fruits and rearrange the list of fruits in such a way that as many frequently ordered sets of fruits can be done so by the initial-final way. A computer programmer analogously will write a code to reorder the elements of an array such that as many frequently called upon entries can be called in the initial-final way to save his future programming time. 


#### Introduction: When Words Do Double Role Playing

What is the meaning of the English word “have”?

You might say - it is obvious and simple right - the word “have” means “to possess” something. For example, consider the following sentences:

I <span style="text-decoration:underline;">have</span> this book.

They <span style="text-decoration:underline;">have </span>a beautiful voice.

I <span style="text-decoration:underline;">have </span>two children. 

Our group of restaurants <span style="text-decoration:underline;">have </span>bulk orders on Sundays.

Even dictionaries tell only this meaning. Check any dictionary.

But consider these sentences.

I **<span style="text-decoration:underline;">have written</span>** this book.

I **<span style="text-decoration:underline;">have finished</span>** my homework.

They **<span style="text-decoration:underline;">have stolen</span>** my car.

In these sentences above, the word “have” occurs. But they don’t convey any meaning of possession there - right? When I say “They have stolen my car” ,  I am not implying that “they” own the “car” - the sentence itself says it is clearly my car! So, what is happening to the word “have” in these usages? 

A native English speaker wouldn’t even be aware of this and still continue to use the language appropriately from his instincts. But an adult learner who learns English would go crazy confused seeing these pairs of sentences - he would be clueless. 

Since you have studied (or were forced to study) grammar at school, you realize that the word “**have**” in a sentence like “They <span style="text-decoration:underline;">have </span>stolen my car” does not have its literal meaning “to possess”. Instead, it combines with the following verb “<span style="text-decoration:underline;">have stolen”</span> and conveys the idea of a “present perfect tense” - an action that has been completed very recently from the present. So, the word “have” here loses its literal meaning and instead conveys an abstract grammatical information with the succeeding verb. It informs us that the verb following it is of a present perfect tense - an action that has just been recently completed (i.e. the car has just been stolen by them). 

If you had paid even more attention to your high school grammar class, you would recall that the word “have” is now acting as an “**auxiliary verb**”. An auxiliary verb is a word that was originally a verb (Eg. I <span style="text-decoration:underline;">have</span> this book) but has lost its literal meaning and is now acting in communion with another verb to convey an abstract grammatical information about the verb that follows it (Eg. They <span style="text-decoration:underline;">have </span>stolen the car). 

English has other auxiliaries too. Take the word “do”.

I <span style="text-decoration:underline;">do</span> this (normal verb that signifies action).

But in a sentence like -

I **<span style="text-decoration:underline;">do read</span>** books everyday.

- The word “do” has lost its literal meaning and has now combined with another verb “read” to convey an emphatic meaning for the verb that follows. The difference between the sentences “I read books everyday” and “I **do** read books everyday” is that the latter sentence is more emphatic. 

Consider the word “will” that can be used as a noun with concrete meaning as in:

Where there is a <span style="text-decoration:underline;">will</span>, there is a way.

Here, “will” is a normal noun that means “desire” or “intent”.

But in the sentence -

“I **<span style="text-decoration:underline;">will read</span>** that book”,

the word “will” has lost its literal concrete meaning, has combined with the verb that follows it, and conveys an abstract grammatical information that the verb is in the future tense.

Such a phenomena in which a word loses its concrete meaning (referring to a thing or an action) and instead is hijacked to convey an abstract grammatical information (like present perfect tense / emphatic / future tense) is called in linguistics as **<span style="text-decoration:underline;">grammaticalization</span>**.

You might think that this grammaticalization exists only in English, but it abounds in all languages - just that we are not trained to explicitly recognise this phenomenon, and we do so only when we try to learn another language as an adult logically. 

Let me give some examples from Hindi.

Consider the following verb root रह​ (rah). This has a concrete meaning which is “to remain, to stay”. Consider the following sentences where it is used in this concrete sense.

मैं अपने घर में **रहता हूँ**  (mein apne ghar men rahtā hūn)

_(Meaning: I **stay/remain** in my house)_

_आपका छात्रावास में **रहना** अत्यवश्यक है  _ (āpkā chātrāvās men rahnā atyavashyak hai)

_(Meaning: You **staying** in the hostel is very important)_

But this verb does indeed get hijacked and loses its concrete meaning in sentences like:

मैं हिंदी <span style="text-decoration:underline;">सीख</span> **रहा** हूँ (main hindī <span style="text-decoration:underline;">sīkh</span> **rahā** hūn)

If you literally translate this sentence into English, it would be “I remained learn Hindi” which is absurd. Instead if you are a native Hindi speaker, you know that this sentence above instinctively means “I am learning Hindi”. In other words, the verb root रह​ (rah) has lost its concrete meaning and now conveys the grammatical information of continuous tense (an action that is in the process). 

The difference between “मैं हिंदी <span style="text-decoration:underline;">सीखता</span> हूँ” and “मैं हिंदी <span style="text-decoration:underline;">सीख</span> **रहा** हूँ” is that 

मैं हिंदी सीखता हूँ = I learn Hindi

मैं हिंदी सीख **रहा** हूँ = I am learning Hindi (in the process)

So, the root रह​ has lost its original meaning of “stay/remain” and is now hijacked by the language to convey the grammatical information of the continuous tense. 

Another verb that famously gets hijacked is the verb root “जा”. As a concrete verb, it means “to go” as in sentences like -

मैं हर दिन​ विद्यालय **जाता** हूँ (mein har din vidyālay jātā hūn)

_(Meaning: I **go** to school everyday)_

But this verb gets hijacked a lot of time to convey the grammatical meaning of passive voice.

Examples:

शतरंज लड़कों द्वारा खेला **जाता** है  (shatranj laṛkōn dvārā khēlā **jātā** hai)

_(Meaning: Chess is played by the boys)_

Here, the word “**jātā**” has completely lost any meaning of going. It simply conveys the grammatical information of passive voice.

The difference between “लड़के शतरंज खेलते हैं” (_the boys play chess)_ and “शतरंज लड़कों द्वारा खेला **जाता** है”_ (chess is played by the boys)_ is that the latter sentence with “**जाता”** transforms the sentence from active voice to passive voice. There is no connotation of any motion or going in the latter sentence.

Auxiliary verbs abound in Hindi  - much more than in English. 

As an exercise,  try to recognise more. 

So, now you are used to a word meaning two different things - a concrete meaning in one situation and an abstract grammatical meaning in another situation. As a native speaker of a language, your neurons are wired by exposure in childhood to seamlessly tell in sub-second time, what meaning is intended, given the syntax.

When I learnt Hindi, during the initial stages, these double meanings of the verbs “rah” and “jā” confused me a lot until I picked up a grammar book.

#### Pāṇini’s Problem

You might ask, “What do all these have to do with Pāṇinian grammar and Saṃskṛta?” Well, Pāṇini had to write a grammar for the Saṃskṛta language of his day and place (he was based in Shalatula, close to modern day Lahore in Pakistan). Many people have written many grammar books for their languages, but Pāṇini’s work is not a grammar book like that of Wren & Martin. His is actually a code - kind of like a computer program. He wanted to design a machine that would take as its input - his verb roots, prefixes and suffixes - and based on his rules - combine them and create legitimate words of the Saṃskṛta language. In other words, he wanted to automatize and imagine word formation in Saṃskṛta as a factory process. The raw materials that he gives to the factory are verb roots, prefixes and suffixes. The factory process control algorithm he uses are the sūtras of his work called the Aṣṭhādhyāyī. If it was a computer, the algorithm could be stored in a ROM. But Pāṇini’s code was supposed to be stored in the minds of people and transmitted orally across generations - it was to be stored in actual memories of the people. But you know human memory is limited and tends to forget, and hence he needed to write a code for his algorithm (in sūtra format) in a highly compressed language so that it could be memorized in a brain in reasonable time. So, he had to do severe information compression for his algorithms while coding them down as sūtras. This is where the fruit market example and contextual based hijacking of words comes into play.

Pāṇini was facing the same problem as a fruit vendor. There is a phenomenon called Sandhi in Saṃskṛta wherein final sounds of a word change so as to accommodate well with the beginning sound of the word that follows it. For example, no language in this world tolerates two vowels coming together at word boundaries - they avoid it by some or the other means.

Example: **a book** (OK in English) but **a egg** (not OK in English). Why? Because there is a succession of two vowels “a-e” in the phrase “**a egg**”! English avoids this vowel-vowel hiatus by inserting a consonant in between - it chooses N - and hence we have “**an egg”**! So, the addition of “N” to change “a” to “an” is actually a sandhi in English. Both “a” and “an” are exactly the same as far as meaning is concerned - indefinite articles. Just that “an” is a Sandhi adjusted form to avoid a vowel-vowel hiatus when the word following the article also begins with a vowel. Saṃskṛta speakers were very conscious of these sound changes happening at boundaries since their language flourished in a purely oral culture and hence minutely noted these changes. Saṃskṛta however follows a different strategy to avoid a vowel-vowel hiatus. When the vowel that ends the first word is इ/उ/ ऋ/ऌ (i/u/ṛ/ḷ), then instead of inserting a consonant, the initial vowel itself converts into its appropriate semi-vowel consonant य्/व्/र्/ल् (y/v/r/l). These transformations are:

इ => य्  (i=>y)

उ => व् (u=>v)

ऋ => र् (ṛ=>r)

ऌ => ल् (ḷ=>l)

Examples:

प्रति + उषा        =   प्रत्युषा

सु    + आगतम्   =  स्वागतम्

मातृ + अंशः       =   मात्रंशः

prat**i** + uṣā        = prat**y**uṣā

s**u** + āgatam      = s**v**āgatam

māt**ṛ** + aṃśaḥ    = māt**r**aṃśaḥ

So Pāṇini wanted to actually say that


##### “If an (इ/उ/ ऋ/ऌ i/u/ṛ/ḷ) is followed by any other vowel, then replace (इ/उ/ ऋ/ऌ i/u/ṛ/ḷ) by (य्/व्/र्/ल् y/v/r/l)” respectively”.

Pāṇini could not afford to say this in so many words - he was not writing a book but rather composing orally transmittable texts. He had 4000 sutras (lines of code) and he wanted each line to be as compressed and brief as possible. So to compress them, Pāṇini uses two strategies:

1. Creating an efficiently arranged list of sounds to call upon easily (reminds you of the fruit basket problem?!)
2. Hijacking the normal meaning of small endings in his language and using them to convey algorithmic transformations of sounds (sounds like the auxiliary verb problem?!!)

Note that Pāṇini not only had to call the group of sounds like (i,u,ṛ,ḷ) and (y,v,r,l) but also dozens of other groups of sounds for other sandhis and other purposes as well. So this is exactly the fruit vendor problem and what he did was exactly what we had said there also - create a well ordered list so that the required groups of sounds to be called, fall consecutively and hence can be summoned by just saying the initial and final sound (with the implicit understanding that sounds in between are also included). 

Pāṇini did arrange the sounds of Saṃskṛta in such a list, and it is called the **Śivasūtras** because he believed that these sounds originated from the drum of Lord Shiva. The list is:

अ इ उ **ण्**                      a i u **ṇ** 

ऋ ऌ **क्**                        ṛ ḷ **k** 

ए ओ **ङ्**                        e o **ṅ** 

ऐ औ **च्**                         ai au **c** 

ह य व र **ट्**                  ha ya va ra **ṭ** 

ल **ण्**                           la **ṇ** 

ञ म ङ ण न **म्**            ña ma ṅa ṇa na **m** 

झ भ **ञ्**                       jha bha **ñ** 

घ ढ ध **ष्**                     gha ḍha dha **ṣ** 

ज ब ग ड द **श्**             ja ba ga ḍa da **ś** 

ख फ छ ठ थ च ट त **व्** kha pha cha ṭha tha ca ṭa ta **v** 

क प **य्**                        ka pa **y** 

श ष स **र्**                     śa ṣa sa **r** 

ह **ल्**                            ha **l**

This is the list that Pāṇini created and credited to Lord Śiva. There is only one difference between this and the fruit list. The last sound in each line which are pure consonant sounds (with no inherent vowel attached) together are called “mute letters” and are not a part of the list and hence excluded in any enumeration. Only letters with the inherent vowel “a” are part of the list (black letters). Why would Pāṇini add these mute bolded letters anyway? 

Wait till the next article in the series: Pāṇini is a genius. Everything he does has amazing foresight and reason behind it.

How efficient is this ordering of letters in the Śivasūtras for the groups of sounds that Pāṇini wants to refer to? For the collection of letters he wants to refer to, this ordering is the most optimal, as per the analysis done by the mathematician Wiebke Petersen in his paper [here.](https://link.springer.com/article/10.1007/s10849-004-2117-7)

Now, seeing this list, for the Sandhi rule we saw earlier, recalling it:

“If an **(इ/उ/ ऋ/ऌ i/u/ṛ/ḷ)** is followed by any other **vowel**, then replace **(इ/उ/ ऋ/ऌ i/u/ṛ/ḷ)** by **(य्/व्/र्/ल् y/v/r/l)**” respectively”.

Now, hence we need to call three sets of sounds for this Sandhi rule:

1. First set - the four vowels **(इ/उ/ ऋ/ऌ i/u/ṛ/ḷ)** that precede
2. Second set - the set of all vowels that can follow
3. Third set - the four consonants **(इ/उ/ ऋ/ऌ i/u/ṛ/ḷ)** that are going to replace the vowels in 1.

Seeing the list above, the three sets can be called as:

1. **इक् ik**        (set of all sounds in the list from **इ** to **क्** excluding the red letters)
2. **अच्  ac**       (set of all sounds in the list from **अ** to **च् ** excluding the red letters)
3. **यण्  yaṇ**      (set of all sounds in the list from **य** to **ण्** excluding the red letters)

If you collect the sounds as directed above from the list (Śivasūtras), you will end up with the exact set of sounds that you want for the rule in the same order!!

So, the rule can now be compressed somewhat as:

“When an **इक् ik** letter is followed by an **अच्  ac** letter, replace the **इक् ik** letter by its corresponding **यण्  yaṇ** letter”

But Pāṇini is not happy with this level of compression - he wants to further compress the conditional statements and the replacement rule also.

For that, we need to take a slightly congruent detour of Saṃskṛta case endings. For words ending in consonants, we have the following meanings associated with endings.

Eg. The words **जागत् jagat** and **मरुत् marut**  mean “world” and “wind” respectively. In the normal Saṃskṛta language, the following endings change the meaning as follows:

 **जागत्     jagat        **= the world

 **जगतः **     **jagat<span style="text-decoration:underline;">aḥ</span> **  = **<span style="text-decoration:underline;">of</span>** the world 

**जगति **      **jagat<span style="text-decoration:underline;">i</span> **     = **<span style="text-decoration:underline;">in/on/at</span>** the world?

**मरुत्      marut        **= the wind

**मरुतः**     **marut<span style="text-decoration:underline;">aḥ</span> **   = **<span style="text-decoration:underline;">of</span** the wind

**मरुति**     **marut<span style="text-decoration:underline;">i</span> **      = **<span style="text-decoration:underline;">in/on/at</span>** the wind

So, we see that in normal language, for words ending in consonant, the ending “**<span style="text-decoration:underline;">aḥ</span>**” conveys the meaning of “**<span style="text-decoration:underline;">of</span>**” and the ending “**<span style="text-decoration:underline;">i</span>**” conveys a sense of location as conveyed by a preposition like “**<span style="text-decoration:underline;">in/on/at</span>**”. 

But these prepositions are the meanings of the ending in the unhiijacked Saṃskṛta language in normal usage!!! Oh my god - what Pāṇini does now would be unbelievable!! He will now hijack these case endings and use it for his special operations in the sūtras!!!

What Pāṇini does here is this. He indirectly declares something like:

“Grammarians, forget what the endings **<span style="text-decoration:underline;">aḥ, i</span>** mean in our normal Saṃskṛta language. As far as my sūtras are concerned, they will stand for these operations:

1. **<span style="text-decoration:underline;">aḥ</span> =>** this will stand for the group of sounds that precede and need to be replaced!!
2. **<span style="text-decoration:underline;">i</span>    =>** this will stand for the group of sounds that follow!!!! 
3. &lt;<span style="text-decoration:underline;">no ending</span>> => this will stand for the group of sounds that replace the first set of sounds!!!!!”

Pāṇini  hijacks the normal Saṃskṛta language (at least some part of it - the case endings) for his coding purposes - in computer jargon - this is called **metalanguage!** Pāṇini is essentially creating a metalanguage out of a natural language (Saṃskṛta) for his coding purpose!!!! Isn’t this genius! 

##### In case of auxiliary verbs, a word gets hijacked within the natural language itself to convey certain other abstract grammatical purposes - Pāṇini  now hijacks some case endings of the language - strips them of their normal meaning - and encodes them with a new instructional meaning as far as the context of his sutras are concerned!!

So, in this elegant meta-language and the well-ordered list of sounds in the Śivasūtras, this rule can be summarized elegantly as:

इकः  यण्  अचि

ik**<span style="text-decoration:underline;">aḥ</span>**  yaṇ  ac**<span style="text-decoration:underline;">i</span>**

<span style="text-decoration:underline;">Literal meaning of the Sutra: </span>Of IK, in AC, yan (_does not make any sense_)

<span style="text-decoration:underline;">Actual meaning in the meta-language of the sutra:</span> Whenever an IK sound is followed by an AC sound, replace the IK sound by its corresponding YAṆ sound

(Actually the sutra reads **इको यण् अचि iko yaṇ  aci**  due to Sandhi of the visarga sound : ḥ but let’s not bother with such minutiae now).

So we see how an elaborate set of Sandhi rules has been so efficiently compressed to a very small statement “ik**<span style="text-decoration:underline;">aḥ</span>**  yaṇ  ac**<span style="text-decoration:underline;">i</span>**” using efficient lists and meta-language. This meta-language will be useful throughout the language because Saṃskṛta is a left-changing language predominantly - that is when two sounds meet, mostly it is the first sound that gets replaced while the second sound stays put. So, this meta language of **<span style="text-decoration:underline;">aḥ</span>** denoting both the first sound and the sound that needs to be replaced is useful across all operations concerning the Saṃskṛta language. 

In this Part 1, we have seen two important concepts in advanced mathematics and computer science used in Pāṇinian grammar. In Part Two, we will see what those bolded/underlined letters are doing in the Śivasūtras and also more sophisticated metalanguage. Gradually, we will see other concepts. 
