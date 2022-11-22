function ProductsHome({ data }: any) {
	return (
		<div>
			<h1>Productos</h1>
			<div>{getProductsData(data)}</div>
		</div>
	);
}
async function pullAllProducts() {
	const res = await fetch(`https://myfreemarket.vercel.app/api/products`);
	const data = await res.json();
	return data.results;
}
export async function getStaticProps() {
	const data = await pullAllProducts();
	return { props: { data } };
}
function getProductsData(products: any) {
	return products.map((p: any) => {
		return (
			<div key={p.id}>
				<h2>{p.Name}</h2>
			</div>
		);
	});
}
export default ProductsHome;
