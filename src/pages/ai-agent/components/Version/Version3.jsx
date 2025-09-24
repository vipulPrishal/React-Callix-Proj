// // THE actual carousel section Headers......

<section className="py-10 border-t border-border/30">
  <Container className="max-w-4xl text-center">
    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
      Testimonials
    </div>
    <h2 className="md:text-3xl font-bold tracking-tight mb-8">
      What Our Users Say
    </h2>

    <div className="relative w-full overflow-hidden">
      {/* Track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="min-w-full flex-shrink-0">
            <div className="p-6 md:p-8 rounded-xl bg-transparent flex flex-col items-center">
              <p className="text-lg md:text-xl italic text-muted-foreground mb-3 max-w-2xl">
                "{t.quote}"
              </p>

              {/* Meta (no avatar, smaller, not bold, tight spacing) */}
              <div className="flex flex-col items-center leading-tight">
                <p className="text-sm md:text-base text-foreground/90">
                  {t.author}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                  {t.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls: arrows + dots together */}
      <div className="flex items-center justify-center mt-5 gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-full bg-background/60 hover:bg-background/80"
          onClick={() =>
            setCurrentTestimonial((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1,
            )
          }
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary w-4'
                  : 'bg-muted-foreground/50 w-2'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-full bg-background/60 hover:bg-background/80"
          onClick={() =>
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
          }
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </Container>
</section>;
