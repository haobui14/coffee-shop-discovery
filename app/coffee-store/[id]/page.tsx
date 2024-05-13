import Link from 'next/link';
import { GoArrowLeft } from 'react-icons/go';

const Page = (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  return (
    <div className='h-full pb-80'>
      <div className='m-auto grid max-w-full px-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4'>
        <div className='mb-2 mt-24 text-lg font-bold'>
          <Link href='/'>← Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
