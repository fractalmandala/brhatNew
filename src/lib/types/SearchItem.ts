export interface SearchItem {
  heading: string;
	url: string
}

export interface itemSearch {
	deva: string;
	iast: string;
	itrans: string;
	roman: string;
	meaning: string;
}

export interface itemDeva {
	deva: string;
	iast: string;
	itrans: string;
	roman: string;
	meaning: string;
}

export interface itemIAST {
	deva: string;
	iast: string;
	itrans: string;
	roman: string;
	meaning: string;
}

export interface itemITRANS {
	deva: string;
	iast: string;
	itrans: string;
	roman: string;
	meaning: string;
}

export interface itemRoman {
	deva: string;
	iast: string;
	itrans: string;
	roman: string;
	meaning: string;
}

export interface DhatuSearch {
    dhaturomanized: string;
    url: string;
    id: number;
}

export interface Dictionary {
    id: string;
    word: string;
    url: string;
}

export interface Apte {
	mainindexhelp: number;
	apte_fts: string;
	deva: string;
	iast: string;
	itrans: string;
	roman: string;
	meaning: string;
}

export interface DhitiPost {
  title: string;
  linkpath: string;
  category?: string;
  tags?: string[];
  author?: string[];
}

export interface SingleTag {
  tag: string;
  count: number;
}
