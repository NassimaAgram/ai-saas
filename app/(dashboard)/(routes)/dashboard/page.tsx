'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Card } from '@/components/ui/card';
import { tools } from '@/constants';
import { cn } from '@/lib/utils';

const DashboardPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-4xl">
          Explore the power of AI
        </h2>
        <p className="text-sm font-light text-center text-muted-foreground md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 space-y-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="flex items-center justify-between p-4 transition cursor-pointer border-black/5 hover:shadow-md"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
