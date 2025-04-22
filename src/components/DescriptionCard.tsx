import { Card, CardHeader, CardTitle, CardContent } from 'components/ui/card';
import { Icon, IconProps } from './ui/icon';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const DescriptionCard = ({
  iconName,
  title,
  description,
  className,
}: HTMLAttributes<HTMLDivElement> & {
  iconName: IconProps['name'];
  title: string;
  description: string;
}) => {
  return (
    <Card background="mode" className={className}>
      <CardHeader className="flex flex-row items-center gap-3 mb-2">
        <Icon
          name={iconName}
          className="w-6 h-6 text-sky dark:text-indigo flex-shrink-0"
          strokeWidth={1.5}
        />
        <CardTitle>
          <h4 className="font-semibold text-primary dark:text-white">
            {title}
          </h4>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
