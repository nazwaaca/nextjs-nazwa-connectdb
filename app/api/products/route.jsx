// app/api/products/route.js
import { products } from '../../lib/dataCrochet'; 


export async function GET() {
  return Response.json(products);
}


export async function POST(request) {
  const maxId = products.reduce((max, p) => (p.id > max ? p.id : max), 0);
  const body = await request.json();
  const newProduct = {
    id: maxId + 1, 
    name: body.name,
    price: body.price,
  };
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  const idx = products.findIndex((p) => p.id === body.id);
  if (idx === -1) return Response.json({ error: "Not found" }, { status: 404 });
  products[idx] = { ...products[idx], ...body };
  return Response.json(products[idx]);
}

export async function DELETE(request) {
  const { id } = await request.json();
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return Response.json({ error: "Not found" }, { status: 404 });
  const deleted = products.splice(idx, 1);
  return Response.json(deleted[0]);
}