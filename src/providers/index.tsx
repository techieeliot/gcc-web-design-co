import { MotionProvider } from './motion-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionProvider>{children}</MotionProvider>;
}
