import SubLayout from '../components/layout/SubLayout';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SubLayout>{children}</SubLayout>;
}
