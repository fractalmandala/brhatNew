export interface SearchItem {
  heading: string;
	url: string
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