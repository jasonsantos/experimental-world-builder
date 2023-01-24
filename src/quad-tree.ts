import { Positionable } from "./model";

export class QuadTreeNode<T extends Positionable> {
  constructor(
    public bounds: [number, number, number, number],
    public depth: number,
    public maxDepth: number,
    public maxChildren: number
  ) {}

  public children: QuadTreeNode<T>[] = [];

  public items: T[] = [];

  public insert(item: T) {
    if (this.children.length) {
      const child = this.children.find((child) => child.contains(item));
      if (child) {
        child.insert(item);
        return;
      }
    }

    this.items.push(item);
    if (this.items.length > this.maxChildren && this.depth < this.maxDepth) {
      if (!this.children.length) {
        this.split();
      }
      this.items.forEach((item) => {
        const child = this.children.find((child) => child.contains(item));
        if (child) {
          child.insert(item);
        }
      });
      this.items = [];
    }
  }

  public remove(item: T) {
    if (this.children.length) {
      const child = this.children.find((child) => child.contains(item));
      if (child) {
        child.remove(item);
      }
    }
    this.items = this.items.filter((i) => i !== item);
  }

  public query(bounds: [number, number, number, number]): T[] {
    let items: T[] = [];
    if (this.children.length) {
      this.children.forEach((child) => {
        if (child.intersects(bounds)) {
          items = items.concat(child.query(bounds));
        }
      });
    }
    items = items.concat(this.items);
    return items;
  }

  public contains(item: T) {
    const [x, y] = item.position;
    const [left, top, right, bottom] = this.bounds;
    return x >= left && x <= right && y >= top && y <= bottom;
  }

  public intersects(bounds: [number, number, number, number]) {
    const [left, top, right, bottom] = this.bounds;
    const [left2, top2, right2, bottom2] = bounds;
    return left <= right2 && right >= left2 && top <= bottom2 && bottom >= top2;
  }

  private split() {
    const [left, top, right, bottom] = this.bounds;
    const x = (left + right) / 2;
    const y = (top + bottom) / 2;
    this.children = [
      new QuadTreeNode(
        [left, top, x, y],
        this.depth + 1,
        this.maxDepth,
        this.maxChildren
      ),
      new QuadTreeNode(
        [x, top, right, y],
        this.depth + 1,
        this.maxDepth,
        this.maxChildren
      ),
      new QuadTreeNode(
        [left, y, x, bottom],
        this.depth + 1,
        this.maxDepth,
        this.maxChildren
      ),
      new QuadTreeNode(
        [x, y, right, bottom],
        this.depth + 1,
        this.maxDepth,
        this.maxChildren
      )
    ];
  }
}

export class QuadTree<T extends Positionable> {
  constructor(
    public bounds: [number, number, number, number],
    public maxDepth: number,
    public maxChildren: number
  ) {}

  public root = new QuadTreeNode<T>(
    this.bounds,
    0,
    this.maxDepth,
    this.maxChildren
  );

  public insert(item: T) {
    this.root.insert(item);
  }

  public remove(item: T) {
    this.root.remove(item);
  }

  public query(bounds: [number, number, number, number]) {
    return this.root.query(bounds);
  }
}
