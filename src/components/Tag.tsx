interface TagProps {
  title: string;
}

export default function Tag({ title }: TagProps) {
  return <div className="rounded-lg bg-neutral px-2 py-1 text-sm">{title}</div>;
}
