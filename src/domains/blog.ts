export class Blog {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly content: string,
  ) {}
}

export class Blogs {
  constructor(private readonly blogs: Blog[]) {}

  search(query?: string): Blogs {
    if (!query) return this;

    return new Blogs(this.blogs.filter((b) => b.title.includes(query)));
  }

  sortById(): Blogs {
    return new Blogs([...this.blogs].sort((a, b) => a.id - b.id));
  }

  take(limit?: number): Blogs {
    if (!limit) return this;

    return new Blogs(this.blogs.slice(0, limit));
  }
}
