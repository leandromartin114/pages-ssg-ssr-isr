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

export async function getStaticProps(context: any) {
	const productId = context.query.productId;
	const data = await pullProductData(productId);
	return { props: { data } };
}
export async function getStaticPaths() {
	return {
		paths: [
			{ params: { id: "recxRbXjrSVQkk8Vr" } },
			{ params: { id: "recwxufi2NDjDBXDS" } },
		],
		fallback: false, // can also be true or 'blocking'
	};
}

export default Product;
