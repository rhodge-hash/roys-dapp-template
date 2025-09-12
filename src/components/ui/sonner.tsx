import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:border! group-[.toaster]:shadow-xl! group-[.toaster]:bg-background! group-[.toaster]:text-foreground!', // Changed shadow-lg to shadow-xl, added bg-background and text-foreground
          error:
            'group-[.toaster]:bg-destructive! group-[.toaster]:text-destructive-foreground! group-[.toaster]:border-destructive!', // Used CSS variables
          success:
            'group-[.toaster]:bg-primary! group-[.toaster]:text-primary-foreground! group-[.toaster]:border-primary!', // Used CSS variables (assuming primary for success)
          warning:
            'group-[.toaster]:bg-yellow-500! group-[.toaster]:text-yellow-900! group-[.toaster]:border-yellow-500!', // Using Tailwind classes for now, ideally map to CSS vars
          info: 'group-[.toaster]:bg-blue-500! group-[.toaster]:text-blue-900! group-[.toaster]:border-blue-500!', // Using Tailwind classes for now, ideally map to CSS vars
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };