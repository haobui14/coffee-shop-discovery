import Banner from '@/components/Banner/Banner.client';
import Link from 'next/link';

export default function Home() {
  const coffeeStoreId = 'starbucks-coffee'
  return (
    <div className='mb-56'>
      <main className='mx-auto mt-10 max-w-6xl px-4'>
        <Banner />
        <Link href={`/coffee-store/${coffeeStoreId}`}>Starbucks Coffee</Link>
      </main>
    </div>
  );
}
