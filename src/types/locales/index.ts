export interface App {
	name: string;
	about: string;
}

export interface Link {
	telegram: string;
	instagram: string;
	whatsapp: string;
}

export interface Navigation {
	brand: string;
	about: string;
	links: Link;
}

export interface Home {
	title1: string;
	title2: string;
	description: string;
	reward: string;
	getStarted: string;
	about: string;
}

export interface About {
	title: string;
	description: string;
}

export interface App {
	uploadAreaTitle: string;
	features: string;
	upload: string;
	useTemplate: string;
	separator: string;
	dragBoxTitle: string;
	uploadRules: string;
}

export interface Page {
	home: Home;
	about: About;
	app: App;
}

export interface Additional {
	soon: string;
	new: string;
}

export interface Alert {
	newFile: string;
	fileRemoved: string;
	notAllowedFile: string;
	notAllowedFilePart2: string;
}

export interface Title {
	allMessages: string;
	messagesByPerson: string;
}

export interface Chart {
	titles: Title;
}

export interface RootObject {
	app: App;
	navigation: Navigation;
	page: Page;
	additional: Additional;
	alerts: Alert;
	charts: Chart;
}