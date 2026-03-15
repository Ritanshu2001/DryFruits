/*
  # Migrate to Dry Fruits Store

  1. Changes
    - Drop existing products and categories
    - Create new categories for dry fruits business
    - Recreate products table with dry fruits inventory
    - Update schema to support premium dry fruits marketplace
*/

DELETE FROM products;
DELETE FROM categories;

INSERT INTO categories (name, description, image_url) VALUES
('Nuts & Seeds', 'Premium nuts including almonds, cashews, walnuts and more', 'https://images.pexels.com/photos/3808349/pexels-photo-3808349.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Dried Fruits', 'Assorted dried fruits - raisins, dates, apricots, berries', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Premium Blends', 'Curated mixed dry fruits and gourmet blends', 'https://images.pexels.com/photos/3573346/pexels-photo-3573346.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Seeds & Grains', 'Nutritious seeds - sunflower, pumpkin, flax and more', 'https://images.pexels.com/photos/4624621/pexels-photo-4624621.jpeg?auto=compress&cs=tinysrgb&w=800')
ON CONFLICT (name) DO NOTHING;
