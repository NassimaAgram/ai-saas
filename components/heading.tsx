import { LucideIcon } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/lib/utils';

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading: FC<HeadingProps> = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}) => {
  return (
    <div className="flex items-center px-4 mb-8 lg:px-8 gap-x-3">
      <div className={cn('p-2 w-fit rounded-md', bgColor)}>
        <Icon className={cn('w-10 h-10', iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export { Heading };
