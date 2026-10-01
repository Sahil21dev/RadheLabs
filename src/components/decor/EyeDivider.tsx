import { cn } from '@/lib/cn'
import { MiniEye } from '@/components/decor/MiniEye'

/** A feather-coloured hairline with a small eye in the middle. Decorative. */
export function EyeDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('flex items-center gap-4', className)}>
      <span className="feather-rule h-px flex-1" />
      <MiniEye className="h-8 w-7" />
      <span className="feather-rule h-px flex-1" />
    </div>
  )
}
