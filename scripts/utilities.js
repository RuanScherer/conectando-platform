function logout() {
	localStorage.removeItem("accessToken")
	localStorage.removeItem("accountType")
	window.location.replace("../index.html")
}