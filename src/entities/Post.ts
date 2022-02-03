import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("posts")
export class Post {
  @PrimaryColumn()
  post_id: string;

  @Column()
  author: string;

  @Column()
  content: string;

  constructor(author?: string, content?: string) {
    if (!this.post_id) {
      this.post_id = uuid();
    }
    this.author = author;
    this.content = content;
  }
}
