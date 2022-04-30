import { Button } from '@/components/button';
import { PageTitle } from '@/components/page-title';

export function IndexRoute() {
  return (
    <>
      <PageTitle title="Home"/>
      <div className="flex flex-col items-center justify-center mt-10 w-screen h-screen">
        <h1 className="font-normal text-5xl mb-10">Hello, World!</h1>
        <Button>Click me 🚀!</Button>
      </div>
    </>
  );
}
