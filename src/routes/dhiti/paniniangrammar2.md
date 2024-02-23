---
title: Dimensions of Pāṇinian Grammar Explored, Part 2 - Non-Terminal or Control Symbols
author:
  - Rama Seshan Chandra Sekaran 
category: Svayambodha
tags:
  - sanskrit
  - panini
  - grammar
excerpt: This series explores Pāṇinian grammar in the Saṃskṛta language, revealing how Pāṇini employs techniques akin to modern computing to generate words using concise rules, paralleling concepts in formal languages and compiler design.
date: 2024-02-23
image: https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/05dhiti/paniniangrammar2.webp
words: "6509"
--- 

This series of articles is dedicated to Pāṇinian grammar of the Saṃskṛta language, as presented in his treatise “Aṣṭādhyāyi”. In trying to characterize the grammar of the Saṃskṛta language spoken in his day, Pāṇini Maharṣi manufactures legitimate and only legitimate words of the Saṃskṛta language, by designing a set of 4000 rules in a highly compressed language of the “sūtra” that operates on the sounds, verb roots, prefixes and suffixes, to generate all the words of Saṃskṛta language.

In this process, Pāṇini uses techniques from modern computing (especially the theory of formal languages that are used in analysis and compiler design for programming languages) and anticipates them even though it would be 2500 years from his time when the first actual computer would be invented. Techniques like optimal ordering of data, information compression, metalanguage, metarules, use of non-terminal symbols, light before heavy are all used in this masterpiece.

To study the Aṣṭādhyāyi, it is essential to know the Saṃskṛta language, as that is the language for which the grammar is designed. However in this series, my aim is to introduce how Pāṇini uses these techniques in his treatise for people who don’t have any knowledge of the Saṃskṛta language, or formal language theory in computer science. I also present the rich developments in the philosophy of language that Pāṇini’s work inspired in his successors and compare it with Western philosophies of language like that of Russell, Wittgenstein, de Saussure, etc.

Language was an important concern in ancient Indian philosophy, especially for the Āstika schools, as they believed that the efficacy of the Vedic rituals directly depended on the sounds of the chanted mantras. They wanted to justify how this efficacy is brought about, and in the process, they had to analyze how the sounds of a language relate to meaning and ultimately reality itself. By the end of this series, you will have a deep appreciation of the importance, depth and scope of Aṣtādhyāyi and the Indian views on language.

Read Part 1 of the series [here](https://www.brhat.in/dhiti/paniniangrammar1).

#### Introduction: A Bookstore

In Part 1, we went to a fruit shop to demonstrate the concept of optimal ordering. This time, we will consider shopping in a bookstore. We will see that managing a bookstore efficiently requires more than optimal ordering. Imagine that you are the owner of a bookstore that sells a particular genre of books - say literature. Imagine that your bookstore is a bunch of linear arrangements of books in just one direction - left to right. For some reason, your shop has a lot of length but only a small width - so you can afford only a single large shelf that goes from left to right. This may be weird, but it will be most helpful when you later connect it to computer science (arrays) and Pāṇinian grammar. To be more precise, imagine all of the books that you want to sell are arranged in an array - one after the other, from left to right, as shown below.

<table>

<tr>

<td>Book 1</td>

<td>Book 2</td>

<td>Book 3</td>

<td>Book 4</td>

<td>Book 5</td>

<td></td>

<td></td>

<td>and so</td>

<td>on</td>

</tr>

</table>

For an efficient shopping experience for your customers, you do realize that there should be an efficient ordering of the books involved - as in the fruit shop case. But the problem is that books carry more information than a fruit. There are so many criteria that one can use to efficiently order the books. Some of them are enumerated below.

1. One can arrange the books in alphabetical order of their authors. This will enable people who are shopping for books of specific authors to find what they want easily.

2. One can arrange the books starting with the most recent releases, to the book that is released the oldest. This can enable people who are exploring for new releases and selecting on the spot very much. This will also enable people who are exploring to randomly explore and select vintage books.

3. One can arrange the books in terms of increasing price. This can enable people who are shopping randomly and are open to any book but come with specific budget constraints.

4. One can arrange books by genre: fiction, fantasy, classic, self-help, etc. This is also another useful idea. Within a given genre, another criteria from the above options can be used to order the books within that genre.

We see that number 4 is the most efficient way; but that still leaves a question, how to order the books within a given genre? Should we follow 1, 2, or 3? Whatever we do, we realize that we can choose only one and cannot make everyone happy. Within a given genre, if we arrange by the alphabetical order of the author’s name, then people who shop for specific author’s books will be very happy to search, but people shopping by other criteria like recentness and budget constraints will be sad.

What do we do then? We could adopt this solution: We can do the arrangement via author’s name; but to satisfy the budget customers, and customers who have the recentness of the books they shop for in their mind, we can attach a tag from every book that has the price info and the month and year of release. For example, we can attach a big tag from every book that displays something like:

##### 02-2023, Rs 435

This can easily convey that the book was released in Feb 2023 and costs Rs 435/-. A budget customer can keep looking at these tags for the price, instead of taking out each book and looking inside for the price. So he can take out and explore only those books within his price range. This will save some time for him (although not as ideal as the option number 3).

Now, there is an important thing. This tag is useful only until you select the book. This is only to facilitate shopping and selection. The information in the tag is not a part of the book. Once you purchase the book, you will throw it away (like you throw away the tags in your clothes once you purchase them - the tags are not a part of a cloth and are there only to facilitate the shopping experience). **So notice that the tag is not a part of the book.**

#### A Little Computer Science

I myself am not a computer programmer - do not worry if you also are not one. I will just give a barebones introduction to an extremely simple computational problem in the area of formal language theory, in an easily understandable manner so that one can appreciate what Pāṇini did, which will come up in the next section.

Let’s say, someone states that you should display on your screen the following list of strings (a string is a collection of letters that need not have any meaning in any language):

**AC

AACC

AAACCC

AAAACCCC

AAAAACCCCC

upto 10,000 iterations.

You might ask initially, what is the point of this exercise? I have chosen a very simple problem to convey a point here, even though it might not seem that practically relevant.

Obviously I have to generate 10,000 strings of this type, made of equal numbers of the letters A,C in equal numbers. One way to do this is to type these strings one-by-one manually onto the screen. But come on, you will realize that is inefficient, straightaway. Now, let me write an algorithm for a computer to follow:

Step 1: Start with **S**
From i=1 to i=10,000

Step 2: Rewrite **S** => A**S**C “ i times ”
After doing so for each “i”,

Step 3: Rewrite **S** => **B**

Step 4: Erase **B**

Step 5: Send the final string to screen

So, we see that this code can generate the required list of strings we want. For example, taking i=4, we have

Rewrite **S** => A**S**C

This gives us the following derivation:

**<span style="text-decoration:underline;">S</span>** => <span style="text-decoration:underline;">ASC</span> => A<span style="text-decoration:underline;">ASC</span>C => AA<span style="text-decoration:underline;">ASC</span>CC => AAA<span style="text-decoration:underline;">ASC</span>CCC (4th time, i=4)

Then, we have:

AAA<span style="text-decoration:underline;">ASC</span>CCC => AAAA<span style="text-decoration:underline;">B</span>**CCCC (Step 3: Replace S by B) => AAAACCCC (Step 4: Erase B)
  
So, we see that this set of instructions, when blindly repeated 10,000 times (counted by “i”), can generate all the strings that we want on the screen.

But look what has happened here! Here, the strings that I have to generate have only the letters A and C! But for coding and manufacturing them, I have used extra symbols in bold - **S** and **B**. These letters were used only as intermediaries for keeping track in the iterative process and they disappear in the final stage when the word is produced. So you realize that to generate a set of strings from an alphabet set computationally, one finds the need to use extra symbols apart from the alphabet for book-keeping purposes. Here, the extra letter **S** was used as a kind of counter to keep producing repeatedly more sets of A and C that we want (through the iteration with the variable “i”). The letter **B** was used as an intermediary to erase the **S** to produce the final string that is bereft of any letters other than A and C.

Now, the bold letters **S, B -** they are used just as intermediaries, facilitate the iterative generation of words, and disappear in the final stage. This must remind you of the tags in the bookstore that are not a part of the book, are there only to facilitate the shopping experience, and are removed after the book is selected and purchased!!

In the area of computer science called “Formal Language Theory” - which deals with algorithmic generation of a given set of words over an alphabet - there is a technical name to these two kinds of letters.
###### The letters that are a part of the words of the final intended language that is to be generated are called **<span style="text-decoration:underline;">terminal symbols.</span>** The set of all such terminal symbols is called the **<span style="text-decoration:underline;">terminal alphabet</span>**.

###### The letters that are not a part of the words of the final intended language but are used by the algorithm to just act as intermediaries to facilitate the generation of the final word and disappear in the final stage when a word is created are called **<span style="text-decoration:underline;">non-terminal symbols</span>**. The set of all such non-terminal symbols is called the **<span style="text-decoration:underline;">non-terminal alphabet. </span>**

In this definition, the tag in the book is a non-terminal!

Now, what Pāṇini did is essentially this. He was concerned not with generating a bunch of simple strings of only two letters. His aim was to generate all Saṃskṛta words algorithmically! His problem was not as simple as generating AC, AACC, AAACCC etc. It was basically to generate all the words of a complicated natural language based on the sacred Vedas! He wanted to design an algorithm so that there was a way to derive any Saṃskṛta word through his algorithm, so that people could check whether what they uttered was a legitimate Saṃskṛta word or not.

Remember at the time of Pāṇini, the Vedic language was already becoming archaic and difficult to understand because Vedic Saṃskṛta had changed and evolved a lot into the various Prākṛts. So, at Pāṇini’s time, the language of ordinary discourse and the native tongue of everyone was one of the Prākṛts with Saṃskṛta, being reserved only for intellectual discourse by the people who preserved the Veda. Now, for a person whose native language is a Prākṛt, and with Saṃskṛta being learnt later and used only in formal communication, there is a high chance that he might mix the two up and make mistakes in his Saṃskṛta pronunciation or mix up Saṃskṛta pronunciation with a Prākṛtic pronunciation. But this should never happen to the Veda - the sacred texts were transmitted for thousands of years orally, and the efficacy of its hymns depended on accurate pronunciation of its words. This is where Pāṇini enters the scene - he thought ‘what if’ in future - two people are pronouncing the same word in a Vedic chant differently, how will they resolve which one of their pronunciation is correct, and hence which one of their words is a legitimate Saṃskṛta word? So, it is in this scenario that he presents his grammar. Through his sūtras, Pāṇini says:

>A word is a legitimate Saṃskṛta word if and only if it can be derived from the repeated and correct application of some subset of my sūtras.

In other words, he is giving us an algorithm (a generation process, like we saw for the language consisting of the words {AC, AACC, AAACCC, etc.}) but for the natural language of Saṃskṛta consisting of all Saṃskṛta words! Pāṇini’s sūtras are the transformation steps like seen in the simple A&C language like “ Rewrite **S** => A**S**C” or “Rewrite **S** => **B**” or “Erase **B**”.

This technique of using tags or non-terminals or auxiliary symbols was rediscovered in Europe only in the last century.

>Pāṇini used the method of auxiliary symbols (non-terminal symbols), in which new affixes are designated to mark syntactic categories and the control of grammatical derivations. This technique, rediscovered by the logician Emil Post, became a standard method in the design of computer programming languages<sup>1</sup>.


Noam Chomsky, the person who laid most of the foundations of modern linguistic theory and formal language theory, also acknowledges Pāṇini as his antecedent. At a speech he delivered in Kolkata in 2001, he said, “The first generative grammar in the modern sense was Pāṇini's grammar”.

>The idea of describing the structure of language with rewriting rules can be traced back to at least the work of Pāṇini, who used it in his description of **Saṃskṛta** word structure – hence, some suggest to rename Backus-Naur Form (BNF) to Pāṇini–Backus Form<sup>2</sup>.

#### Saṃskṛta Roots, Ablaut, and the Vedic Accent

To understand what Pāṇini did, we must have a rough idea of the Saṃskṛta language - after all, that is the language for which he is designing a formal grammar, right? You do not need to remember all the language specific information that I tell below, but only the overall gist of what is happening.
#### (i) Roots & Ablaut

For that, let us look at some Saṃskṛta words with their meanings:

करो<span style="text-decoration:underline;">ति</span> = he/she/it does
सर<span style="text-decoration:underline;">ति</span> = he/she/it flows
चल<span style="text-decoration:underline;">ति</span> = he/she/it moves or walks
ए<span style="text-decoration:underline;">ति</span> = he/she/it goes
बोध<span style="text-decoration:underline;">ति</span> = he/she/it awakens

Now, we see intuitively that the ति part in every verb that is listed above is a suffix, or a grammatical ending, as it repeats in all verbs that are in 3rd person, singular, present tense. It turns out that this ति is an ending for a verb which conveys that the verb is:

1. Present tense

2. Indicative mood (conveying a factual statement)

3. Active Voice

4. The subject of the verb is third person and singular

Let us change one of these grammatical aspects and we will see the endings change.

Example: Consider the word चल<span style="text-decoration:underline;">ति</span> which is a present indicative active 3rd person singular form of the verb. Let’s see how the endings change when any of these details above change - the factor that is changing is highlighted in yellow.

- चल<span style="text-decoration:underline;">ति</span> =_he/she/it_ **moves** (present, indicative, active, 3rd person, singular)

- <span style="text-decoration:underline;">अ</span>चल<span style="text-decoration:underline;">त्</span> = _he/she/it_ **moved** (<span style="text-decoration:underline;">past</span>, indicative, active, 3rd person, singular)

- चल<span style="text-decoration:underline;">तु</span> = _he/she/it_ **should move** (present, <span style="text-decoration:underline;">command</span>, active, 3rd person, singular)

- चल्य<span style="text-decoration:underline;">ते</span> = _he/she/it_ **is moved** (present, indicative, <span style="text-decoration:underline;">passive</span>, 3rd person, singular)

- चल<span style="text-decoration:underline;">सि</span> = _you [singular]_ **move** (present, indicative, active, <span style="text-decoration:underline;">2nd person</span>, singular)

- चल<span style="text-decoration:underline;">न्ति</span> = _they_ **move** (present, indicative, active, 3rd person, <span style="text-decoration:underline;">plural</span>)

So we see that the core part of the verb, which conveys the meaning of moving, is the part “**चल्**”. We see that as this part is the barest minimum part which conveys walking - all other endings that come after it (called suffixes) or before it (called prefixes) convey grammatical information like tense, mood, voice, person and number of the subject. Now, let us take some more words for comparison. I have bolded the main part of the word (excluding the prefixes and suffixes) for each word.

<table>

<tr>

<td>करोति = does (<strong>कर्</strong>)

</td>

<td>बोधति = awakens (<strong>बोध्</strong>)

</td>

<td> वेवेष्टि = pervades (<strong>वेष्</strong>)

</td>

<td>चलति= moves (<strong>चल्</strong>)

</td>

</tr>

<tr>

<td>कृतः = done (<strong>कृ</strong>)

</td>

<td>बुद्धः* = awakened (<strong>बुध्</strong>)

</td>

<td>विष्टः = pervaded (<strong>विष्</strong>)

</td>

<td>चलितः = moved (<strong>चल्</strong>)

</td>

</tr>

<tr>

<td>कारणम् = means of doing (<strong>कार्</strong>)

</td>

<td>बौद्धः = Buddhist (follower of a Buddha)(<strong>बौध्</strong>)

</td>

<td>वैष्णवः = follower of the pervader विष्णुः (<strong>वैष्</strong>)

</td>

<td>चालकः = mover(<strong>चाल्</strong>)

</td>

</tr>

<tr>

<td>

</td>

<td>

</td>

<td>विष्णुः = one who pervades (<strong>विष्</strong>)

</td>

<td>

</td>

</tr>

</table>

  
- This is the etymology of the title of Buddha - the awakened one - for Prince Siddartha

So, we see something happening here - that will be very familiar if you are a speaker of an Indo-Aryan language, but not at all if you are a speaker of a Dravidian language. What happens here is that the vowel inside the main part of various words conveying the same core meaning changes as it goes through various forms. The exact vowel changes are enumerated below:

- चल् vs चाल् (c**a**l vs c**ā**l)

- विष् vs वेष् vs वैष् (v**i**ṣ vs v**e**ṣ vs v**ai**ṣ)

- बुध् vs बोध् vs बौध् (b**u**dh vs b**o**dh vs b**au**dh)

- कृ vs कर् vs कार् (k**ṛ** vs k**ar** vs k**ār**)

The vowel changes inside the main root cover three varieties and they are:

<table>

<tr>

<td><strong>Low Grade</strong>

</td>

<td><strong>Normal Grade - गुण​</strong>

</td>

<td><strong>High Grade - वृद्धि</strong>

</td>

</tr>

<tr>

<td>अ

</td>

<td>अ / आ

</td>

<td>आ

</td>

</tr>

<tr>

<td>इ OR ई

</td>

<td>ए

</td>

<td>ऐ

</td>

</tr>

<tr>

<td>उ OR ऊ

</td>

<td>ओ

</td>

<td>औ

</td>

</tr>

<tr>

<td>ऋ OR ॠ

</td>

<td>अर्

</td>

<td>आर्

</td>

</tr>

<tr>

<td>ऌ

</td>

<td>अल्

</td>

<td>आल्

</td>

</tr>

</table>

So, we see that the main part of all the words with the same core meaning remains the same except for a three-part variation in vowel. The first variety (अ, इ, उ, ऋ, ऌ) is called **low grade** by English grammarians because the gap between the lower and upper part of the mouth is the lowest in this variety. Saṃskṛta grammarians consider this the default form of the vowel and never named it. The second variety of vowels (अ/आ, ए, ओ, अर्, अल्) is called the **medium grade** by English grammarians and **guṇa** by Saṃskṛta grammarians. The third group of vowels (आ, ऐ, औ, आर्, आल्) is called **high grade** by English grammarians because the gap between the lower and upper portions of the mouth is the highest in this grade; and is called **vṛddhi** by Saṃskṛta grammarians which also carries the same meaning.

If you think this is too strange for you to handle, you have it in English and Hindi too. For example, consider the words

- s**i**ng, s**a**ng, s**u**ng, s**o**ng (core meaning: singing)

- g**i**ve, g**a**ve (core meaning: giving)

- m**a**n, m**e**n (core meaning: manliness)

- dr**i**nk, dr**a**nk, dr**u**nk (core meaning: drinking)

- f**oo**d, f**ee**d, f**e**d (core meaning: eating)

So you see that English uses vowel changes inside the main part of the root to convey things like tense, number, and nominal derivation - just that you knew it all along, but didn’t know that you knew it!

The variation between low and medium grade for इ and उ vowels still survives in the modern Indo-Aryan languages; although the vṛddhi derivation has ceased to be productive in the modern languages, except in learnt Tatsāma borrowings from Saṃskṛta. Examples in Hindi are:

- खुलना vs खोल (उ vs ओ)
- भेजना vs भिजवाना (इ vs ए)

In fact, some form of vowel alternation inside a single syllable main part survives, in some form or the other, in all Indo-European languages; and remains one of the key features in characterizing the relatedness of the languages of that family. This is known in technical Indo-European linguistics by the term **ablaut**.

If the main part varies in its vowel, by three possible ways, in various related derivations, how can we list them in a dictionary that contains the main parts alone? This is where Pāṇini makes a choice - he looks at all possible words derived from a common theme, and then chooses to take the main part with the lowest vowel grade that it occurs in, and then put it in his dictionary of main parts. The main part with the lowest grade that Pāṇini chooses to enter into his list is called by English grammarians as **root** and by Saṃskṛta grammarians as **धातु (dhātu**).

So, the root is that main part of all related words in Saṃskṛta, in the lowest possible vowel grade in which it is found among all possible words coming from it. In most cases, this happens to be the vowel in low grade; but in some cases this can be the medium grade too, and in rare cases the root can be listed in the root list in high grade also. The list of roots is called as **dhātupāṭha.** To see the list of all the roots of the Saṃskṛta language (Pāṇini), visit [this page](https://ashtadhyayi.com/dhatu) (the roots are in bold, and the remaining are technical details about the root).

#### (ii) The Vedic Accent

In this section, we will talk about a very important feature of vowels in the Vedic language that had been completely lost in the spoken classical language, which is accentuation of vowels. In the Vedic language, all vowels in all words could be articulated in 3 ways depending on the pitch in which they were uttered. Based on that, they are classified as

1. _udātta_ उदात्त "raised" (high pitch)
2. _anudātta_ अनुदात्त " (low pitch)
3. _svarita_ स्वरित "sounded" (high & then low = falling pitch)

This type of accent system is similar to the[ pitch-accent](https://en.wikipedia.org/wiki/Pitch_accent_(intonation)) system of modern-day[ Japanese](https://en.wikipedia.org/wiki/Japanese_pitch_accent), but has completely disappeared from Saṃskṛta and its daughter Indo-Aryan languages after the Vedic era. Although the Vedic mantras were transmitted by the priests with correct accent, it was lost in the later post-Vedic stage of spoken Saṃskṛta and Prākṛts. The exact manner of articulating these three accents may be best mastered by listening to Vedic chantings done by professionally trained Vedic priests. But what is important here is how Pāṇini uses these pitch accents for other purposes - in his input data, he equips the vowels with accents, to convey more information in it, and use them as tags again!

#### Non-Terminals in Pāṇinian Grammar (इत् letters)

Pāṇini has lots of inputs going in to his algorithms - some of them are:

1. Śivasūtras (arrangement of sounds of the language)
2. List of roots धातुपाठः
3. List of suffixes प्रत्ययाः
4. List of prefixes उपसर्गाः
5. List of augments

He creates Saṃskṛta words by combining roots with prefixes and suffixes, and by applying certain transformations on them that are enumerated by the sūtras.

Now in arranging these roots and suffixes, we run into the same problem as the bookstore. There are many ways to arrange the roots and suffixes and prefixes, as they have many characteristics and undergo many transformations for many kinds of situations. So, not all of those can be conveyed through mere ordering of them (like not all kinds of shoppers will be satisfied given an arrangement of books in a bookstore with a given criterion). So, like tags, Pāṇini needs to equip them with tags so that they convey more information about the root or suffix. The tags which we have called in computer science as non-terminals are referred to as **इत्** letters.

Remember what we did in the computer science problem, where we had to generate a language with alphabets A and C? We used non-terminals whose letters are not A and C but something else - B and S. This is a rational choice - otherwise we will confuse the non-terminals and the terminals. This is a good coding strategy. But unfortunately, Pāṇini did not have that luxury as he was living in an oral culture. He could not afford to use novel sounds for those tag-like non-terminal letters. Whatever sounds are found in his Saṃskṛta and Prākṛt language, he could use only those for his non-terminal symbols too! So, he places these non-terminals carefully at some place and tells us in the sūtras, where he has these non-terminals exactly so that hearers do not mistake it as a part of the root or a suffix! The set of instructions he gives are encoded in the sūtras 1.3.2 - 1.3.9.

For brevity’s sake, I shall state only some of the important sūtras regarding this and I shall not state the original Saṃskṛta sūtra of Pāṇini; because not all of you may be familiar with Saṃskṛta, and also lot of meta-language and contextual issues have to be broken down. So, I shall state only what the sūtras convey in plain English after their decoding.

> 1.3.2 In any input data, a nasal-vowel (अनुनासिकः) is a non-terminal (इत्) letter **except in**

NOTE: A nasal vowel is sometimes denoted in writing, by a dot above the letter with a moon shaped curve. Eg. अँ is the nasal version of अ.

> 1.3.3 A final consonant in any input data is a non-terminal (इत्) letter **except in (1.3.4)**

So, here we see that the final consonant of any input data (Śivasūtras, roots, prefixes, suffixes, etc.) is non-terminal; and has to be remembered but omitted, for linguistic purposes. Also, a vowel in the input data is a non-terminal if it is a nasal vowel. But the rule has some exceptions (as stated in bold) and these exceptions are what are spelled out in the sūtra 1.3.4. But I shall not go through this here in this introductory level article.

> 1.3.5 An initial syllable that is either of ञि, टु, डु in any input data is a non-terminal (इत्) letter

In this sūtra, we are told that in any input data, if the initial starting syllable is one of the three - ञि/टु/डु - then that syllable is again not a part of the data, it is only a tag that has some information about the data.

> 1.3.6 An initial ष् consonant at the beginning of a suffix only (प्रत्यय) is a non-terminal (इत्) letter

In this sūtra, we are told that only in suffixes (प्रत्ययs), the letter ष् - when it occurs initially in the suffix - is not a part of the suffix, and is just a tag non-terminal.

> 1.3.7 An initial consonant that is either of च्, छ्, ज्, झ्, ञ्, ट्, ठ्, ड्, ढ्, ण् at the beginning of a suffix only (प्रत्यय) is a non-terminal (इत्) letter

In this sūtra also, we are told that only in the case of suffixes, if the initial letter is among च्, छ्, ज्, झ्, ञ्, ट्, ठ्, ड्, ढ्, ण् - then it ceases to be a part of the suffix, and is a tag non-terminal letter.

Now, an important question may arise. Why did not Pāṇini make this rule as a part of the previous rule itself? Why state for initial ष् of the suffix alone separately in 1.3.6 and for the other initials of suffixes in 1.3.7? The answer again has to wait until a future lesson - in Pāṇinian grammar, there exist what are called as **_meta-rules,_** where in a rule can be overridden by another rule depending on the parameters of the rule. So, it turns out that this 1.3.7 can be overridden under circumstances (i.e. not all initial च्, छ्, ज्, झ्, ञ्, ट्, ठ्, ड्, ढ्, ण् of suffixes are non-terminals - sometimes they are a part of the suffix itself). This overriding will be described in another rule; but 1.3.6 is unconditionally true, and holds universally for all suffixes. Due to the difference in nature of these two rules, they are separately enunciated.

> 1.3.8 An initial consonant that is either of ल्, श्, क्, ख्, ग्, घ्, ङ् at the beginning of a suffix that are not taddhita (non तद्धित-प्रत्ययs)​ is a non-terminal (इत्) letter

Now, we see that this rule applies not to all suffixes, but to a special class of suffixes that are not of a particular type. What is a taddhita suffix? These are the suffixes that are not attached to verb roots but to other derived parts of speech - like noun stem or adjective stem.

For example in English, the suffix “**tion**” acts on a verb root and converts it into a noun.

Eg. “deplete” (verb) => “deple**tion**”.

But the suffix “**ic**” acts on not verbs but nouns to convert them into adjectives.

Eg. “atom” (noun) => “atom**ic**”.

The suffix “**ness**” acts on adjectives and converts them into nouns.

Eg. “great” (adjective) => “great**ness**”.

So, in the language of Pāṇini grammar, the suffixes “**ic**” and “**ness**” are the **_taddhita_** suffixes in English as they act on stuff that are not verbs (nouns and adjectives) whereas the suffix “**tion**” is a **_non-taddhita_** suffix as it acts on a verb.

So, the sūtra 1.3.8 says that for suffixes that act only on verbs, an initial ल्, श्, क्, ख्, ग्, घ्, ङ् is a non-terminal.

You might ask, what do these tag letters convey? They convey quite a lot of information. Seeing the exact इत् letter and the nature of the data (whether it is a root or a suffix or so on), one can convey so much additional information. Some of them are given below:

#### Uses of consonant इत् markers

**(i) What suffixes a root or a nominal stem can take**

<span style="text-decoration:underline;">English example</span>
There are a lot of suffixes in English taken by lots of words. For example, take the suffix “**ion**” in English that converts a verb ending in a silent “e” into an abstract noun.

dilute => dilution
substitute => substitution
deplete => depletion

But not all verb roots in English that end in “e” can take this “**ion**”. As examples, see below. Note that a word in italics here indicates that it is not a word of the English language.

take => *taktion*
make => *maktion*
measure => *measurtion*

We see that there is no regular rule that determines what kind of verb roots take this “**ion**” suffix. So we need to equip the roots with tags that convey this information of whether they can take the suffix “ion”. Consider another example of how English verbs form their past tenses.

<span style="text-decoration:underline;">First way (regular) way: </span>

Most English verbs form their past tense by attaching a “d/ed” suffix to the verb root. These are called regular verbs.

Examples: call-called, show-showed, maintain-maintained, manage-managed, help-helped.

Now, there are also lots of other verbs that form their past tense by a vowel change inside the root as it was mentioned previously. They can be arranged into groups based on what vowel comes about in the past tense inside the root.

<span style="text-decoration:underline;">Second class - Drink:</span>
These verbs form their past tense like drink-drank.
Examples: sing-sang, drink-drank, shrink-shrank, sink-sank, ring-rang, sit-sat, eat-ate.

<span style="text-decoration:underline;">Third class - Drive:</span>
These verbs form their past tense like drive-drove.
Examples: ride-rode, dive-dove, strive-strove.

<span style="text-decoration:underline;">Fourth class - Grind:</span>
These verbs form their past tense like grind-ground.
Examples: wind-wound.

<span style="text-decoration:underline;">Fifth class - Sleep:</span>
These verbs for their past tense like sleep-slept.
Examples: keep-kept, weep-wept, sweep-swept, creep-crept.

<span style="text-decoration:underline;">Sixth class - Blow:</span>
These verbs for their past tense like blow-blew.
Examples: throw-threw, fly-flew, grow-grew.

<span style="text-decoration:underline;">Seventh class - Cut:</span>
These verbs for their past tense like cut-cut.
Examples: put-put, hit-hit.

<span style="text-decoration:underline;">Eighth class - Take:</span>
These verbs for their past tense like take-took.
Examples: shake-shook.

<span style="text-decoration:underline;">Ninth class - Fight:</span>
These verbs for their past tense like fight-fought.
Examples: seek-sought, catch-caught, bring-brought, think-thought, buy-bought, teach-taught.

<span style="text-decoration:underline;">Tenth class - Break:</span>
These verbs for their past tense like break-broke.
Examples: freeze-froze, win-won.

<span style="text-decoration:underline;">The irregular ones:</span>
For some verbs, the past tense is completely unrelated to the present tense and comes from an entirely different root and has to be painstakingly memorized separately.
Examples: go-went, make-made, is-was, do-did

So, we see English verbs are divided into ten classes and some irregulars based on how they form their past tense from the present tense. And there is no predictable rule for this. For example, the words “call” and “fall” look almost similar in form but belong to different classes (“called” vs “fell”). The words “sit” and “hit” also look almost similar in form and again belong to different classes (“sat” vs “hit”). So, this class information again has to be conveyed by either arranging them in an order according to class, or attaching tags to them. For the past tense, if we arrange the verbs according to class, we cannot repeat the same for the classes of the past participle. So, even if we manage to convey the past tense class information by arrangement and order of the roots, the method by which the past participle is formed has to be conveyed by other means like using a tag, because these classes do not overlap.

>So, the non-terminals can convey the information of which roots can take which kinds of suffixes.

<span style="text-decoration:underline;">Saṃskṛta example</span>
Now how does this work in Saṃskṛta? Let us see an example. If you recollect the verb examples in the previous section, you might have recalled the verb suffix ति that conveyed that the verb is third person, singular, present tense, indicative mood and active voice.

Eg. Root पठ् (to read) => पठति (he/she/it reads)

Turns out not all roots take this ति suffix. Some other roots prefer to take another set of suffixes and in this other set, the same third person singular, present tense, indicative mood, active voice is conveyed by a suffix ते.

Eg. Root युध् (to fight) => युध्यते (he/she/it fights)

Some other roots can take both of those suffixes.
Eg. Root पच् (to cook, to get ripe) => पचति/पचते (he/she/it cooks)

The first set of suffixes with ति as 3rd person, singular, present, indicative, active are called **parasmaipada** suffixes and the second set of suffixes with ते as 3rd person, singular, present, indicative, active are called **ātmanepada** suffixes. Roots that can take only parasmaipada suffixes are called naturally **parasmaipada roots**. Roots that can take only ātmanepada suffixes are called naturally **ātmanepada roots**. Roots that can take both are called **ubhayapada roots** (Saṃskṛta: ubhaya = both).

Now, why do roots take two kinds of suffixes to mean the same thing? From comparative linguistics with other Indo-European languages, it turns out that at an earlier stage of the language, all roots could take both parasmaipada and ātmanepada suffixes and this conveyed a distinction in meaning. This distinction is still preserved in Saṃskṛta roots that are ubhayapada (can take both kinds of suffixes). Take the root पच् that we saw above that can take both parasmaipada and ātmanepada suffixes. The distinction was that the parasmaipada conveyed that the verb was done for someone else other than the subject and the ātmanepada conveyed that the verb was done for the subject itself.

Example:
Root पच् => parasmaiapada पचति = he cooks for himself
Root पच् => ātmanepada पचते = he cooks for someone else

So, this was the original distinction between parasmaipada and ātmanepada suffixes. This distinction is still conserved in ubhayapada roots that can take both kinds of suffixes. But as the language evolved, some verbs were only used in the parasmaipada form and some others only in the ātmanepada form that the alternative was totally forgotten and hence only one set of suffixes survived in usage for those roots by the time the language was recorded down. That is for instance, an ātmanepada root like युध् would have originally had both a parasmaipada युध्यति (he fights for someone else) and an an ātmanepada युध्यते (he fights for himself) but the ātmanepada form युध्यते eventually having been used more frequently, eclipsed the parasmaipada form such that it was forgotten. So, now the verb root युध् in classical Saṃskṛta takes only the ātmanepada form युध्यते. For this root, we have proof explicitly. The root युध् had both parasmaipada and form in the Vedic language and only in classical language, its parasmaipada usage has vanished.

Anyways how does Pāṇini convey which root is which? He does this through the non-terminal tag letters again! The rule is as follows:

- If a root has a non-terminal consonant ङ् or it has a non-terminal nasal vowel with the anudātta accent, then it takes only the ātmanepada suffixes!

- If a root has a non-terminal consonant ञ् or it has a non-terminal nasal vowel with the svarita accent, then it optionally takes ātmanepada suffixes! (i.e. it is an ubhayapada root)

- All other roots that do not satisfy either of these two conditions can take only parasmaipada suffixes!

Examples of roots (inside the brackets is the bare root without the non-terminals):

- Root डुपचँष् (पच्) with svarita अँ => ubhayapada

- Root शिञ् (शि) has ञ् non-terminal => ubhayapada

- Root युधँ (युध्) with anudātta अँ => only ātmanepada

- Root गाङ् (गा) with ङ् non-terminal => only ātmanepada

- Root भू (भू) with no non-terminals => only parasmaipada

**(ii) What suffixes cause what change in roots**

<span style="text-decoration:underline;">English example</span>
Next, we will see what the non-terminals on suffixes can do. They can say quite a lot of information like:

1. To what, the suffix must attach itself to - for example: The suffix “er” in English (play => player) can attach itself only to verbs, while the suffix “ic” in English (atom => atomic) can attach itself only to nouns, while the suffix “ness” can attach itself only to adjectives (ugly => ugliness).

2. They can convey information as to what kinds of changes they cause to the roots or stems that they attach themselves to. For example, the suffix “er” in English doubles the final hard consonant of a verb root if the root ends in a consonant (eg. pu**t** => pu**tt**er, si**t** => si**tt**er, ra**p** => ra**pp**er).

<span style="text-decoration:underline;">Saṃskṛta example</span>
Similarly, we have counterparts in Saṃskṛta too. Take for example, some roots and their associated verbal nouns.

Saṃskṛta has several suffixes that demand that the vowel inside the root stays in medium grade (guṇa) so that by default, it is the vowel grade assume for suffixes that attach to verbs directly and give rise to nouns or adjectives.

Example: Root कृ (meaning: to do)

The guṇa of the vowel ऋ is अर्.

Some nouns and adjectives derived from this root:

- करण = the act of doing

- करणीय / कर्तव्य = that which is to be done (duty, obligation, etc)

- कर्तृ = doer

- कर्तुम् = for doing

But the past participle (done) always mostly has its vowel in the low grade which is

- कृत = done

How can this be conveyed? Again, Pāṇini conveys this using non-terminals. In his list of suffixes, he stores this त​ suffix as क्त​ (kta) with the first क् being a non-terminal. This initial क् is not a part of the suffix but tells us that the vowel inside the root should not be in the normal guṇa grade as expected for many other suffixes but should be in the low grade!

#### Conclusion

Thus, I hope that I have sparked a wonder in you to marvel at the work of this great tradition of ours that anticipated modern computing concepts without any computers or even much writing.

I bow down to the rich grammatical tradition of Bhārata which reached its peak in Pāṇini; and his commentators and elaborators, like Patañjali, Vararuci etc.

Next time, we will see another fascinating concept in the theory of computation that is foreseen by Pāṇini.

#### References:

1. Kadvany, John (2007), “Positional Value and Linguistic Recursion”, _Journal of Indian Philosophy_ **35**: 587–520.

2. P.Z. Ingerman (1967)
