export function getCreateDate() {
	const aaa = new Date();
	const year = aaa.getFullYear();
	const month = String(aaa.getMonth() + 1).padStart(2, "0");
	const day = String(aaa.getDate()).padStart(2, "0");
	const createdAt = `${year}-${month}-${day}`;
	return createdAt;
}
