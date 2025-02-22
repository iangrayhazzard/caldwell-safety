import { forwardRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const buttonStyles = tv({
	base: "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 sm:text-base",
	variants: {
		variant: {
			primary: "bg-accent text-accent-foreground hover:bg-accent/90",
			secondary:
				"bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
})

export interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof buttonStyles> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, ...props }, ref) => {
		return (
			<button
				className={buttonStyles({ variant, className })}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = "Button"

export { Button, buttonStyles }
