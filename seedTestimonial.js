// seedTestimonials.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Testimonial from './db/models/Testimonial.js';

dotenv.config(); // wczyta DB_HOST z pliku .env

const testimonials = [

  {
    owner: new mongoose.Types.ObjectId('68f146c951070a3693ea819b'),
    testimonial:
      "Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!",
  },
  {
    owner: new mongoose.Types.ObjectId('68f1d0e67f45e01becfdb453'),
    testimonial:
      "Foodies has been a game-changer for my kitchen adventures. The variety of recipes and the ease of following them make every meal a delightful experience. My family loves the new dishes I’ve been able to prepare thanks to this amazing app!",
  },
  {
    owner: new mongoose.Types.ObjectId('68f1d181d06d122695b240b8'),
    testimonial:
      "The best part about Foodies is how it simplifies meal prep. With clear instructions and a wide range of cuisines, I feel like a professional chef in my own home. It's a fantastic resource for anyone looking to enhance their cooking skills.",
  },
  {
    owner: new mongoose.Types.ObjectId('68f146c951070a3693ea819b'),
    testimonial:
      "Foodies is a must-have for any home cook! With its extensive recipe collection and easy-to-use interface, I've discovered new culinary delights and streamlined my meal planning. Cooking has never been this enjoyable!",
  },
  {
    owner: new mongoose.Types.ObjectId('68f1d0e67f45e01becfdb453'),
    testimonial:
      "I love how Foodies brings creativity to my kitchen. The unique recipes and the inspiration to try new things have made cooking fun again. It’s like having a culinary guide right on my phone!",
  },
];

const seedTestimonials = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);
    console.log('✅ Połączono z MongoDB');

    await Testimonial.deleteMany();
    console.log('🧹 Usunięto stare dokumenty z kolekcji testimonials');

    await Testimonial.insertMany(testimonials);
    console.log('🌱 Dodano nowe testimonialsy!');

    process.exit(0);
  } catch (err) {
    console.error('❌ Błąd podczas seedowania:', err);
    process.exit(1);
  }
};

seedTestimonials();
