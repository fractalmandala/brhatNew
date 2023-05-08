// src/types.d.ts
type ShareButtons = {
  network: string;
  label: string;
	icon: string;
  shareUrl: (url: string, text: string) => string;
};
