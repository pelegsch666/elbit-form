function openDataUrl(dataUrl: string) {
	const iframe =
		"<iframe width='100%' height='100%' src='" + dataUrl + "'></iframe>";
	const urlWindow = window.open();
	urlWindow?.document.open();
	urlWindow?.document.write(iframe);
	urlWindow?.document.close();
}

export default openDataUrl;