type StatusViewProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function StatusView({ title, description, action }: StatusViewProps) {
  return (
    <div className="rounded-[20px] border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
      <h2 className="m-0 mb-2.5 text-2xl font-bold text-slate-900">{title}</h2>
      <p className="m-0 mb-4 text-slate-500">{description}</p>
      {action}
    </div>
  );
}
