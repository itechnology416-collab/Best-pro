export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
        <p className="text-sm text-muted-foreground animate-pulse">
          Loading<span className="animate-bounce inline-block">.</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: "0.1s" }}>.</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: "0.2s" }}>.</span>
        </p>
      </div>
    </div>
  );
}
