function logout() {
	localStorage.removeItem("accessToken")
	localStorage.removeItem("accountType")
	window.location.replace("../index.html")
}

function getUrlParams() {
	const { href } = window.location
	let params = href.slice(href.indexOf("?") + 1, href.length)
	params = params.split("&")
	params = params.map(param => {
		parts = param.split("=")
		return { key: parts[0], value: parts[1] }
	})
	return params
}

function getUrlParam(name) {
	const params = getUrlParams()
	return params.filter(param => param.key === name)[0].value
}

function getTokenData() {
	let tokenData = localStorage.getItem("accessToken").split(".")[1]
	return JSON.parse(atob(tokenData)) 
}

function authValidation(accountType) {
	if (!localStorage.getItem("accessToken") || !localStorage.getItem("accountType") || localStorage.getItem("accountType") !== accountType) {
		window.location.href = "../entrar.html"
		return
	}
}