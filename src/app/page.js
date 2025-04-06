import HomePapeProduct from "@/components/home-product/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[2px_1fr_2px] items-center justify-items-center min-h-screen sm:p-1 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <HomePapeProduct></HomePapeProduct>
      </main>
    </div>
  );
}
