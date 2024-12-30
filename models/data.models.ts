export interface PortalNewsData {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: number;
  published_at: number;
  status: number;
  author: Partial<UserData>;
  category: {
    id: number;
    display_name: string;
    slug: string;
  };
  likedByMe: boolean;
  likes: Partial<UserData>[];
  images: {
    small: { [id: string]: string };
    full: { [id: string]: string };
    original: { [id: string]: string };
  };
  filled_image: number;
}

export interface UserData {
  id: number;
  display_name: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
