---
title: Bṛhat and Dhīti Typography Guidelines
sections: 
- one
- two
- three
- four
- five
- six
---

<div class="p-bot-32">
<small>Last Updated: 12 July '23</small>
</div>

<div class="contents null">
Contents:
</div>
<div class="contentlist">
	<p><a href=#one>1. General</a></p>
	<p><a href=#two>2. Submission Rules</p>	
	<p><a href=#three>3. Diacritics</p>
	<p><a href=#four>4. Images</p>
	<p><a href=#five>5. Typography</p>
	<p><a href=#six>6. Suggest Changes</p>
	<p><a href=#seven>7. Technical Records</p>
</div>



<div id="one"></div>


This document is a living reference sheet for all rules, guidelines, open points and ongoing issues for the typography on Bṛhat website in general, and on Dhīti in detail. The content here documents material for **Writers**, **Editors** and **Posters** of our articles. Any text in this document contained within boxed areas like so:

```markdown
this is boxed text
```

is technical content pertaining only to **Posters**. Writers and Editors need not look into this content.

The guidelines in broad:

##### 1. We represent Sanskrit words in their IAST forms (see below).
##### 2. For quoting other writers/authors within an essay, we represent the quotes EXACTLY as they are found. That is, if the quoted text does not use IAST, then we do not diacritize it either.
##### 3. In general, all links within a post should open in a new tab. 
##### 4. All writers should familiarize themselves with IAST, and implement it in their submissions. While we proofread all posts, we do not diacritize on behalf of writers.
##### 5. Writers must share the specific image(s) to use with their article IN THE SUBMISSION MAIL. That is, NOT ONLY AS inserted images within the article document. Images should be authorized for use/we should own the permission or rights to use them. 
##### 6. The hero image for a post must be in 1200 x 630 dimension (done by poster, not writer), and this plus any other images should all be in .webp format. 
##### 7. The recommended location for all article Google Documents is [this shared folder.](https://drive.google.com/drive/folders/1hj763vEa-__O2649T0ZO96jJqnaqdonj?usp=sharing). 


<div id="two"></div>

### Submission Rules
- An article is not ready for posting unless the writer has resolved/closed all comments and suggestions on the source Google Document.
- An article is not ready for posting unless the hero and any other relevant images have been shared via email, and they are all authorized for usage.
- An article must be submitted in the writer's best, error-free, IAST-compliant output. Bṛhat will run it through a round of proof-reading, but writers must submit grammatically/lexically sound pieces. 
- Bṛhat-external writers must share a Twitter handle if they have one and if they are open to be tagged. If they do not want to be tagged, they MUST volunteer this info.
- It is preferred that the writer share a draft for a less than 200-character tweet, or a thread of no more than 3 tweets, for posting their article on Twitter.
- Editors must share all requisites above with the poster.
- We do not "generate AI" images for writers- internal or otherwise.


<div id="three"></div>

### Diacritics
For all usage of Sanskrit words on the website, and especially in Dhīti posts, we follow the International Alphabet of Sanskrit Transliteration system containing characters with diacritic marks, such as- ā, ṛ, ḥ. Some relevant links:
- About IAST - [Wikipedia](https://en.wikipedia.org/wiki/International_Alphabet_of_Sanskrit_Transliteration)
- Basic Converter - [YesVedanta](https://www.yesvedanta.com/transliterate/)

###### There are some exceptions to the above rule:
1. We do NOT diacritize the colloquial or modern proper nouns. For example, names of recent/contemporary personalitieis- Ram Swarup (and not Rāma Svarūpa); or of locations and temples- Ayodhya, Jagannath Mandir, etc.
2. We do NOT diacritize inside of quotes of other writers/authors. Quotes are always represented exactly as they are found.

###### Open Issues
- What about any non-Sanskrit Indian language?

###### General Terms
- We do NOT diacritize Hindi words. 

<div id="four"></div>

### Images
All hero images must be in 1200 x 630 resolution. Easy tools to crop/resize images are Canva, Figma or online sites like [this](https://picresize.com/en/edit). 
These and any other image must be in .webp compressed form. Generally, an image should not be more than around 100-150kb in size.
The ideal storage place for all images is [this Supabase storage bucket](https://app.supabase.com/project/rnfvzaelmwbbvfbsppir/storage/buckets/brhatwebsite), but one can use any public image storage solution. All image links should end in .webp ( or .png/.jpg/.jpeg at minimum.)

<div id="five"></div>

### Typography
All posts are stored as markdown files for formatting-agnosticism. Post sub-headers are in H4, that is:

```markdown
#### Like This
```

All emphasis text is in H5, that is:

```markdown
##### Like This
```

All quotes are in blockquote tags like this:

```markdown
> Each line
> This way
>
> and gaps also
```

All image captions are in div classes like so:

```html
<div class="imagecaption">this is a caption</div>
```

All images are in img class "imageclass" if landscape, and img class "imageclass2" if portrait, like so:

```html
<img class="imageclass" src="imagelinkhere" alt="imagealt"/>
<!--or-->
<img class="imageclass2" src="imagelinkhere" alt="imagealt"/>
```

For all article endnotes/ references/ footnotes, the recommendation is to place them all at the END of article, and within the Google Document to use superscripts<sup>1</sup> `<--` as seen here. Posters must use superscripts in markdown like so:

```html
this<sup>in sup tags</sup>

<!--and at end of articles as a numbered list-->
```

###### Editors are requested to follow the below guidelines in the source Google Documents:
1. For all text that needs emphasis, please style it as Header 5:

<img class="imageclass" src="/images/header5.png" alt="header5"/>

2. For all text that is a sub-title in the post, please style it as Header 4:

<img class="imageclass" src="/images/header4.png" alt="h4"/>

3. For all text that is in quotes, please style it as Header 6:

<img class="imageclass" src="/images/header6.png" alt="h6"/>

###### It does NOT matter what font/size/styling you use in the Google Document, it's the above that IS IMPORTANT.
Here is a [wonderfully lucid video](https://www.loom.com/share/8d6c49027b2e4b0fb51bb03d9e01797b?sid=7f56f8ce-e5e8-4b90-853a-3a10859e1349) explaining what this means.

###### Posters MUST change all Header 6 above, to blockquote tags.

<div id="six"></div>

### Suggest Changes
To suggest changes/additions/resolutions to this document, please add comments [in this file](https://docs.google.com/document/d/13dfTYcXPqDRLgOlmw55ldMvvvch1597TR9DLCF3Jnsc/edit?usp=sharing), and tag "Amrit." The file is open for editing when logged in with a brhat ID. To receive edit access, write to amrit.pandey@brhat.in  


If you find an error in any post, please write to contact@brhat.in

<div id="seven"></div>

### Technical Records
This section is a reference sheet only for **Posters** and can be safely ignored by **Writers** or **Editors.**

###### Reference for Quote Citations
We have instances in Dhīti posts where there is a citation of text/author following a blockquote, like so:
<img class="imageclass m-bot-16" src="/images/quotecite.png" alt="quotecite"/>

For such cases, the text to be used must be placed inside `<cite>` tags just below the blockquote, like so:
```markdown
> “A belief in the equal truth...”
<cite>Sitaram Goel</cite>
```

There are also instances where the citation itself is a link:
<img class="imageclass m-bot-16" src="/images/quotecitelink.png" alt="quotecitelink"/>

Here too we use a "cite" class, but this time it is as an `<a>` tag, like so:
```html
<a href="https://www.anandranganathan.com/2017/04/14/ambedkar-on-islam-the-story-that-must-not-be-told/" class="cite">Dr B. R. Ambedkar</a>
```

A final case is where the citation contains a link and a text- both. Now it is all inside a `div` tag, but still containing the class of "cite", like so:
```html
<div class="cite">
The <a href="https://www.brhat.in">link</a> is linked.
</div>
```

###### Reference for Images in Posts
Key/Hero image must always be 1200x630, best compressed version. For other images:
1. Portrait ratio images must be in img class "imageclass2" tags.
2. Landscape ration images must be in img class "imageclass" tags.

##### Alt captions of an image should not contain the word "image" in them. Like so:
```html
<img class="imageclass" src="put link here" alt="put an alt caption describing this landscape"/>
<img class="imageclass" src="put link here" alt="put an alt caption describing this portrait"/>
```

###### Reference for Links inside Posts
There are 2 types of instances for links inside of Dhīti posts:
1. The link is within the general text body, that is- as part of the general markdown content, or
2. The link is within a specific tag being used, such as in a `<cite>` tag, or when an `<a>` tag exists inside a `<div>`

For the first instance, the markdown syntax is [text being linked](the actual link), like so:
```markdown
[this](https://www.brhat.in) being the linked text
```

The above will appear on a page as [this](https://www.brhat.in) being the linked text! :)

In the second instance, where the link is inside a tag:
```html
<div class="cite">then we use it like <a href="put link here">this</a> being the linked text.</div>
```

###### Reference for Markdown
Double check final files for some basic markdown requirements:
1. All text to be italicized is inside *a single asterix symbol* on either side of the text- *
2. Alternately, it can be inside _a single underscore symbol_ on either side- _
3. All bold text must be inside **double asterix symbols on either side**
4. For italics, you can use either asterix or underscore, but **use the same standard throughout the whole file**
5. All quotations are italic **by default**. This means you must ensure they do not have asterix/underscore at the beginning or end of lines.
6. <span style="color: #fe4a49">If you have a symbol at one end of the line but not the other, ie., you opened them but did not close or closed an unopen tag, the symbol will appear in the final front-text!</span>

Here is how these instances appear within the markdown body:
```markdown
1. All text to be italicized is inside *a single asterix symbol* on either side of the text- *
2. Alternately, it can be inside _a single underscore symbol_ on either side- _
3. All bold text must be inside **double asterix symbols on either side**
4. For italics, you can use either asterix or underscore, but **use the same standard throughout the whole file**
5. All quotations are italic **by default**. This means you must ensure they do not have asterix/underscore at the beginning or end of lines.
6. <span style="color: #fe4a49">If you have a symbol at one end of the line but not the other, ie., you opened them but did not close or closed an unopen tag, the symbol will appear in the final front-text!</span>
```

###### Special Notice on Markdown Frontmatter:
All Dhīti markdown files must contain essential frontmatter at the **absolute top of the file**. Make sure the files do not have a blank first line. The frontmatter must begin at the first. The frontmatter contains post metadata- title, author(s), key image link, post date, category, tag(s) and an excerpt. The excerpt appears in post cards throughout the website, and along with the tags is visible on post SEO data to global search indices. **ALL OF THEM ARE MANDATORY**

Here is the exact syntax to follow within markdown, beginning at first line of the file:
```markdown
---
title: Title of the Post, Preferably in Camel Case Like This
author: Author Name
category: Category Name
tags:
- tag 1
- tag 2
date: "YYYY-MM-DD"
image: https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/05dhiti/47.webp
excerpt: "The festival of Ahoi Aṣṭamī instills the deep sense in Hindus that our actions have consequences; that human civilization destroys Nature by the sheer act of living in great groups and thus has to make extra efforts to respect and protect Nature; and that we have to give back to Nature as we take much from it."
---
```

##### If there are two authors, add second author's name in a following line, like this:
```markdown
title: Title of the Post, Preferably in Camel Case Like This
author: Author Name
authortwo: Second Author
...rest of frontmatter below...
```

##### There can only be 1 category, but there can be multiple tags, each following the same below syntax:
```markdown
tags:
- tag 1
- tag 2
- tag 3
- and so on
```

##### Only the date and excerpt need to be within quotation marks, and the rest **should never be!**

These are some helpful links for markdown syntax. 
1. A very helpful [Markdown Guide](https://www.markdownguide.org/cheat-sheet/), mark it down.
2. Basic and easy markdown [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), mark it down.

<img class="iconimage m-top-32" src="/images/iconcoder2.png" alt="coder"/>