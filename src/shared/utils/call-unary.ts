export function callUnary<T>(method, request) {
	return new Promise<T>((resolve, reject) => {
		method(request, (err, response) => {
			if (err) {
				reject(err)
			} else {
				resolve(response)
			}
		})
	})
}
