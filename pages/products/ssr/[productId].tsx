function Product({ data }: any) {
	return (
		<div>
			<h1>{JSON.stringify(data.Name)}</h1>
			<h2>{JSON.stringify(data["Unit cost"])}</h2>
			<div>{JSON.stringify(data.Description)}</div>
		</div>
	);
}

async function pullProductData(id: string) {
	const res = await fetch(`https://myfreemarket.vercel.app/api/products/` + id);
	const data = await res.json();
	return data;
}

export async function getServerSideProps(context: any) {
	const productId = context.query.productId;
	const data = await pullProductData(productId);
	return { props: { data } };
}

export default Product;
