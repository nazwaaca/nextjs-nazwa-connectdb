// /app/products/[id]/page.tsx
import { products } from "../../lib/dataCrochet";
import Link from "next/link";
import Notfound from '../[id]/notfoundproduct';
import Image from "next/image";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return <Notfound/>;

  return (
    <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 py-9">
      <section className="bg-gray-100 max-w-4xl mx-auto px-8 py-8 rounded-2xl">
        <div className="flex justify-center py-5">
            <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-lg object-cover mb-4"
            />
        </div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-pink-600 font-bold mb-2">Rp {product.price.toLocaleString()}</p>
        <p className="mb-4">{product.description}</p>
        <p className="text-sm text-gray-800 mb-4">Deskripsi Produk : {product.stock}</p>
        <p className="text-sm text-gray-500 mb-4">{product.longdesc}</p>
        <p className="text-sm text-gray-500 mb-8">Stok: {product.stock}</p>
        <Link 
            href='https://wa.me/6285797207968'
            className="justify-center text-center mt-auto w-full inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
              Beli Sekarang
        </Link>
      </section>
    </main>
  );
}