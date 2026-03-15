import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Category = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  image_url: string;
  stock: number;
  featured: boolean;
  created_at: string;
};

export type CartItem = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  products?: Product;
};
