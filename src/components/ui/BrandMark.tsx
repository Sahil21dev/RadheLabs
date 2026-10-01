import { MiniEye } from '@/components/decor/MiniEye'
import { cn } from '@/lib/cn'

/** The logo mark: a small peacock feather-eye in its real colours. Decorative. */
export function BrandMark({ className }: { tone?: 'onLight' | 'onDark'; className?: string }) {
  return <MiniEye className={cn('h-[28px] w-[24px] shrink-0', className)} />
}
