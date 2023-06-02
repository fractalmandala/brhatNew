---
title: dhiti flow
---

1. input of text and metadata at front end, data goes to supabase table 'brhat-dhiti'. Values:
    2. title - article title
    3. category - select from dropdown
    4. tags - ex: 'dharma, festivals, culture'
    5. image - needs to be image public link, that ends in .webp or .png and 1200 x 630 dimension. All current dhiti images stored at this link - [https://app.supabase.com/project/rnfvzaelmwbbvfbsppir/storage/buckets/brhatwebsite](https://app.supabase.com/project/rnfvzaelmwbbvfbsppir/storage/buckets/brhatwebsite)
    6. author
    7. if 2nd author, tick checkbox to open input field
    8. fullbody - complete markdown cleaned text 

2. if input successful, success message will appear on screen. Else error message and error reason will be displayed.

3. at successful input, refresh current page. latest dhiti post will now show as what we posted. 
4. click "generate excerpt." this will generate 2 content bits: an excerpt, and a tweet thread.
5. copy tweet content and paste for usage/editing. DO THIS IMMEDIATELY, as content will disappear.
6. edit excerpt content as required, and then click "CONFIRM."
7. you will be prompted to input the article slug. 
    8. article slug will determine the link of the article.
    9. all articles at dhiti are at link pattern- 'www.brhat.in/dhiti/`[slug]`'
    10. Example: I entered the [slug] for article 'The Dharmika Gene' as '`dharmikagene`'. So article is live at www.brhat.in/`dharmikagene`
    11. RULES FOR SLUGS:
            > ** no spaces, no empty areas between, before or after characters **
            > ** no special characters, ie NO DIACRITICS, NO HYPHENS, NO BACKSLASHES ETC**
            > ** shorter slugs are always better. An article titled 'The Saga of the Padmanabhadasas - A Glimpse into the Cultural Practice and Patronage of the present day Travancore Royals, Part 3' has the simple slug `travancore3`, so it is live at www.brhat.in/dhiti/`travancore3`
            
ENTERING A SLUG AND CLICKING CONFIRM WILL POST THE ARTICLE TO DHITI, AND IT WILL NOW BE LIVE!
JAO TWEET KARO AB.


### markdown rules:

all emphasis text must be preceded with 5 hash symbols, ie, it is header5/h5:

##### like this you see

all quotes are preceded with '>' symbol, they are blockquotes:

> like this over here.

any and all section headers are header4/h4, so they must begin with 4 hash symbols:

#### like this guy

we do not use h3, h2 and h1 in dhiti posts. 


### template for images:

if single image: <img src="imagelink_here_inside_quotes" alt="genericimagecaption"/>
            
if gallery:

<div class="rta-grid grid4 colgap200 rowgap200">

    <img src="linkofimage1" alt="captionofimage1">
    <img src="linkofimage2" alt="captionofimage2">
    <img src=...and so on>
    
</div>


### how to make superscripts for footnotes:
at any word where you need it<sup>1</sup>
