export interface ResponseData {
  commit: Commit;
  html_url: string;
  committer: Committer;
  owner: Owner;
  name: string;
  full_name: string;
  created_at: string;
  update_at: string;
  size: number;
}

export interface Commit {
  author: Author;
  committer: Author;
  tree: Tree;
  message: string;
}

export interface Author {
  name: string;
  email: string;
  date: string;
}
export interface Tree {
  sha: string;
  url: string;
}

export interface Committer {
  login: string;
}

export interface Owner {
  login: string;
  avatar_url: string;
}
