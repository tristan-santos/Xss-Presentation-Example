export function convert(str) {
	return new Promise((resolve, reject) => {
		if (str) {
			resolve('There was a String ', str)
		} else {
			reject('There was no string')
		}
	})
}
