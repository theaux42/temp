import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "angular-card bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600 hover:scale-105 title-font",
        destructive:
          "angular-card bg-red-500 text-white hover:bg-red-600",
        outline:
          "angular-card border-2 border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-white hover:scale-105 title-font",
        secondary:
          "angular-card bg-gray-800 text-gray-100 hover:bg-gray-700",
        ghost: "hover:bg-red-500/10 hover:text-red-400 text-gray-300 title-font",
        link: "text-red-500 underline-offset-4 hover:underline hover:text-orange-400 title-font",
        stadium: "angular-card bg-gradient-to-r from-red-600 to-orange-500 text-white title-font uppercase tracking-wider hover:scale-105 data-stream",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base font-bold",
        icon: "h-10 w-10",
        xl: "h-14 px-10 text-lg font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
