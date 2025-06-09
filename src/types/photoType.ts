export interface PaginationMeta {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export interface Meta {
  pagination: PaginationMeta;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface Image {
  data: ImageData[];
}

export interface Attributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: Image;
}

export interface DataItem {
  id: number;
  attributes: Attributes;
}

export interface ApiResponse {
  data: DataItem[];
  meta: Meta;
}