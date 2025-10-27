export function LogoLarge() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-3">
        {/* Geometric Icon */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer diamond */}
            <path
              d="M50 10 L85 50 L50 90 L15 50 Z"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-primary"
            />
            {/* Middle diamond */}
            <path
              d="M50 25 L72.5 50 L50 75 L27.5 50 Z"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-accent"
            />
            {/* Inner diamond */}
            <path
              d="M50 35 L62.5 50 L50 65 L37.5 50 Z"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-primary"
            />
            {/* Connection lines */}
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="25"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/60"
            />
            <line
              x1="50"
              y1="75"
              x2="50"
              y2="90"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/60"
            />
          </svg>
        </div>
        
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-none mb-0.5 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            ETHAN TENG
          </h2>
          <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-muted-foreground">
            CONSULTING
          </p>
        </div>
      </div>
    </div>
  );
}

